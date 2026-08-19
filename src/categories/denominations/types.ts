export interface Denomination {
  name: string
  family: string
  origin: string
  distinctives: string
  authority: string
  baptism: string
  communion: string
  governance: string
  /** Concrete leadership structure and roles (elders, deacons, bishops, priests…). */
  leadership: string
  salvation: string
  see_also?: string[]
}
