import React from 'react'
import st from './Impressions.module.scss'

export const ChangingRating = ({ register }) => {


  return <div className={st.ratingArea} >
  <input type='radio' id='star-5' name='rate' value='5' {...register('rate')} />
  <label htmlFor='star-5' title='Оцінка «5»'></label>	
  <input type='radio' id='star-4' name='rate' value='4'{...register('rate')}/>
  <label htmlFor='star-4' title='Оцінка «4»'></label>    
  <input type='radio' id='star-3' name='rate' value='3'{...register('rate')}/>
  <label htmlFor='star-3' title='Оцінка «3»'></label>  
  <input type='radio' id='star-2' name='rate' value='2'{...register('rate')}/>
  <label htmlFor='star-2' title='Оцінка «2»'></label>    
  <input type='radio' id='star-1' name='rate' value='1'{...register('rate')}/>
  <label htmlFor='star-1' title='Оцінка «1»'></label>
</div>
}
