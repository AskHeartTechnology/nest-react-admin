import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

export class CoreEntity {
  @PrimaryGeneratedColumn({ comment: '主键ID' })
  id: number

  @CreateDateColumn({ comment: '创建时间' })
  createTime: Date

  @UpdateDateColumn({ comment: '更新时间' })
  updateTime: Date

  @DeleteDateColumn({ comment: '删除时间' })
  deleteTime: Date

  @Column({
    type: 'tinyint',
    default: 0,
    comment: '是否删除(0:未删除,1:已删除)',
  })
  deleted: number
}
