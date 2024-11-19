import { BeforeInsert, Column, Entity } from 'typeorm'
import { CoreEntity } from './core.entity'

@Entity('user')
export class User extends CoreEntity {
  @Column({
    type: 'varchar',
    unique: true,
    nullable: false,
    comment: '邮箱地址',
  })
  email: string

  @Column({ type: 'varchar', comment: '用户名称' })
  username: string

  // Select: false 表示查询结果不包含该字段
  @Column({ type: 'varchar', comment: '用户密码', select: false })
  password: string

  @Column({ type: 'varchar', comment: '用户头像' })
  avatar: string

  @BeforeInsert()
  hashPassword() {
    // TODO: 数据入库前将密码进行加密
  }
}
