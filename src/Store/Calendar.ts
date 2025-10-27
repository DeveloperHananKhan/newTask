import {create} from 'zustand'


interface ScheduleItem {
  weekday: string
  day: number
}

interface Schedule{
    schedule : ScheduleItem[],
    scheduleFunction : () => void
}

export const useCalendarStore  = create<Schedule>((set)=>({

schedule: [],
scheduleFunction: ()=>{
    const weekdays = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
     let newSchedule = []
    for(let i = 0 ; i < 7 ; i++){
         const date = new Date();
          date.setDate(date.getDate() + i);
         const calendar = {
            weekday : weekdays[date.getDay()],
            day : date.getDate()
         }
         newSchedule.push(calendar)
    }
     set({ schedule: newSchedule })

}

}))


