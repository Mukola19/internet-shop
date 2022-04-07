import React from "react"
import { Button, Form } from "react-bootstrap"
import { InputGrpup } from "../../commons/Elements/InputGrpup"
import { useForm } from "react-hook-form"
import { ModalHok } from "../../HOK/ModalHok"
import { ChangingRating } from "./ChangingRating"
import st from "./Impressions.module.scss"






const Review = ({ addImpression}) => {
  const { 
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm()



  const validate = { maxLength: 50 }
  

  const onsubmit = data => {
    // translating number to string
    data.rate = Math.floor(data.rate)
    addImpression(data)
    reset()

  }

  return (
    <Form onSubmit={handleSubmit(onsubmit)} className={st.form}>
     <h4>Ваша оцінка</h4>
    <ChangingRating register={register} />
      <InputGrpup
        name="description"
        register={register}
        errors={errors}
        textarea
        label="Ваші враження"
        validate={validate}
      />
      <InputGrpup
        name="advantages"
        register={register}
        errors={errors}
        textarea
        label="Переваги товару"
        validate={validate}
      />
      <InputGrpup
        name="shortcomings" 
        register={register}
        errors={errors}
        textarea
        label="Недоліти товару"
        validate={validate}
      />

      <Button variant='dark' type='submit'>Відправити</Button>
    </Form>
  )
}

export const WriteAReview = ModalHok(Review)
