import { useState } from 'react'
import { Link } from 'react-router-dom'
import { buildQuiz, reviewAvailable, getQuizStats, recordQuizResult, type QuizMode, type Question } from '../lib/quiz'
import './quiz.css'

const ROUND = 10

type Screen = 'start' | 'play' | 'done'

export function QuizView() {
  const [screen, setScreen] = useState<Screen>('start')
  const [mode, setMode] = useState<QuizMode>('full')
  const [questions, setQuestions] = useState<Question[]>([])
  const [idx, setIdx] = useState(0)
  const [picked, setPicked] = useState<number | null>(null)
  const [correct, setCorrect] = useState<boolean[]>([])
  const [stats, setStats] = useState(getQuizStats())

  const reviewCount = reviewAvailable()

  const start = (m: QuizMode) => {
    const qs = buildQuiz(m, ROUND)
    if (!qs.length) return
    setMode(m); setQuestions(qs); setIdx(0); setPicked(null); setCorrect([]); setScreen('play')
  }

  const choose = (i: number) => {
    if (picked !== null) return
    setPicked(i)
    setCorrect((c) => [...c, i === questions[idx].answer])
  }

  const next = () => {
    if (idx + 1 < questions.length) { setIdx(idx + 1); setPicked(null) }
    else { setStats(recordQuizResult(correct.filter(Boolean).length)); setScreen('done') }
  }

  // ---- start screen ----
  if (screen === 'start') {
    return (
      <>
        <p className="quiz-intro">Test yourself with multiple-choice questions. Review mode quizzes only what you’ve checked off in Discover; Everything covers the whole app.</p>
        <div className="dv-stats">
          <div className="dv-stat"><span className="n">{stats.best}</span><span className="l">Best score</span></div>
          <div className="dv-stat"><span className="n">{stats.taken}</span><span className="l">Quizzes taken</span></div>
        </div>
        <div className="tlabel">Start a round of {ROUND}</div>
        <div className="quiz-modes">
          <button className="quiz-start" onClick={() => start('full')}>
            <span className="qm-t">Quiz me on everything</span>
            <span className="qm-s">All terms, people, stories, catechism &amp; verses</span>
          </button>
          <button className={`quiz-start${reviewCount ? '' : ' disabled'}`} onClick={() => reviewCount && start('review')} disabled={!reviewCount}>
            <span className="qm-t">Quiz me on what I’ve reviewed</span>
            <span className="qm-s">{reviewCount ? `${reviewCount} item${reviewCount === 1 ? '' : 's'} reviewed so far` : 'Check off Discover items to unlock this'}</span>
          </button>
        </div>
      </>
    )
  }

  // ---- results screen ----
  if (screen === 'done') {
    const score = correct.filter(Boolean).length
    const missed = questions.filter((_, i) => !correct[i])
    return (
      <>
        <div className="quiz-score">
          <div className="qs-big">{score}<span>/{questions.length}</span></div>
          <div className="qs-msg">{score === questions.length ? 'Perfect! 🎉' : score >= questions.length * 0.7 ? 'Well done!' : 'Keep at it!'}</div>
        </div>
        {missed.length ? (
          <>
            <div className="tlabel">Review what you missed</div>
            <div className="quiz-missed">
              {missed.map((q, i) => (
                <div key={i} className="qm-row">
                  <div className="qm-q">{q.prompt}</div>
                  <div className="qm-a">{q.options[q.answer]}</div>
                  {q.link ? <Link className="qm-link" to={q.link}>Open →</Link> : null}
                </div>
              ))}
            </div>
          </>
        ) : null}
        <div className="quiz-again">
          <button className="quiz-start" onClick={() => setScreen('start')}>Back to quiz menu</button>
        </div>
      </>
    )
  }

  // ---- play screen ----
  const q = questions[idx]
  return (
    <>
      <div className="quiz-top">
        <span className="quiz-count">Question {idx + 1} of {questions.length}</span>
        <span className="quiz-kind">{q.kind}{mode === 'review' ? ' · review' : ''}</span>
      </div>
      <div className="quiz-progress"><span style={{ width: `${(idx / questions.length) * 100}%` }} /></div>

      <div className="quiz-q">{q.prompt}</div>
      {q.sub ? <div className="quiz-sub">{q.sub}</div> : null}

      <div className="quiz-opts">
        {q.options.map((o, i) => {
          const state = picked === null ? '' : i === q.answer ? ' correct' : i === picked ? ' wrong' : ' dim'
          return (
            <button key={i} className={`quiz-opt${state}`} onClick={() => choose(i)} disabled={picked !== null}>
              {o}
            </button>
          )
        })}
      </div>

      {picked !== null ? (
        <button className="quiz-next" onClick={next}>{idx + 1 < questions.length ? 'Next →' : 'See results'}</button>
      ) : null}
    </>
  )
}
