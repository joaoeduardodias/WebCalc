import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import {v4 as uuidV4} from 'uuid'
import { User } from './User';

@Entity("dashboards")
class Dashboard {

  @PrimaryColumn()
  id: string;

  @Column()
  user_id: string;

  @ManyToOne(()=> User)
  @JoinColumn({name: "user_id"})
  user: User;
  
  @Column()
  calculation: string;
  
  @Column()
  result: number;
 
  @CreateDateColumn()
  created_at: Date;

  constructor(){
    if(!this.id){
      this.id = uuidV4()
    }
  }

}

export { Dashboard }
