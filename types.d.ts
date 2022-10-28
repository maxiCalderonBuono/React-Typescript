export interface Sub  {
  nickname: string;
  avatar: string;
  monthSubs: number;
  description?: string;
}


export type SubsFromApi  = Array<{
     id:number;
     nickname: string;
     month: number;
     profileURL: string;
     description?: string
}>