import React from "react";

import { FormGroup, Label, Input, Button, Form } from "reactstrap";
import { Formik } from 'formik';
import * as Yup from "yup";


const TaskComponent = (props) => {
  const {task, onUpdate} = props;



  return (
    <div>
    <Formik initialValues={initialValues(task)} onSubmit={(values, { setSubmitting }) =>  onUpdate(values)} validationSchema={registerValidationSchema}>
      {formik =>(
      <Form onSubmit={formik.handleSubmit} >
        <FormGroup>
          <Label for="title">Titulo</Label>
          <Input id="title" type="text" {...formik.getFieldProps('title')} />
        </FormGroup>
        <FormGroup>
          <Label for="deadline">Fecha limite</Label>
          <Input name="deadline" type="date" {...formik.getFieldProps('deadline')} />
        </FormGroup>
        <FormGroup className="row">
          <div className="col-sm-6">
          <Label for="startTime">Hora inicio</Label>
          <Input id="startTime" name="startTime" type="select" {...formik.getFieldProps('startTime')}>
            <option value="">--seleccione--</option>
            <option value="0">0:00</option>
            <option value="1">1:00</option>
            <option value="2">2:00</option>
            <option value="3">3:00</option>
            <option value="4" >4:00</option>
          </Input>
          </div>
          <div className="col-sm-6">
          <Label for="finishTime">Hora fin</Label>
          <Input id="finishTime" name="finishTime" type="select" {...formik.getFieldProps('finishTime')}>
            <option value={null}>--seleccione--</option>
            <option value="0">0:00</option>
            <option value="1">1:00</option>
            <option value="2">2:00</option>
            <option value="3">3:00</option>
            <option value="4" >4:00</option>
          </Input>
          </div>
        </FormGroup>


        <FormGroup>
          <Label for="remind">Recordar</Label>
          <Input id="remind" name="remind" type="select" {...formik.getFieldProps('remind')} >
            <option value="">--seleccione--</option>
            <option value="1">Mas tarde</option>
            <option value="2">Manana</option>
            <option value="3">Proxima semana</option>
          </Input>
        </FormGroup>

        <FormGroup>
          <Label for="repeat">Repetir</Label>
          <Input id="repeat" name="repeat" type="select" {...formik.getFieldProps('repeat')}>
            <option value="">--seleccione--</option>
            <option value="1">Diario</option>
            <option value="2">Semanal</option>
            <option value="3">Mensual</option>
            <option value="4">Anual</option>
          </Input>
        </FormGroup>
        <FormGroup switch>
          <Input type="switch" checked={formik.values.complete} {...formik.getFieldProps('complete')} />
        </FormGroup>

        <Button type="submit" className="m-1 btn btn-success">
          {task? "Actualizar":"Crear tarea"}
        </Button>
      </Form>
    )
   }
   </Formik>
    </div>
  )
}

const registerValidationSchema = Yup.object({
  title: Yup.string().required("El nombre es obligatorio").min(3, "El nombre debe contener al menos 3 caracteres"),
  limitDate: Yup.date().default(() => new Date()),
}
);

function initialValues(task){
    //console.log(DateTime.fromISO(task.limitDate));
  return(
    {
      title: !task ? '' : task.name,
      deadline: !task ? '' : task.limitDate,
      startTime: !task ? '' : task.startTime,
      finishTime: !task ? '' : task.finishTime,
      remind: !task ? '' : task.remind,
      repeat: !task ? '' : task.repeat,
      complete: !task ? false : task.complete,
    }
  );
}

export default TaskComponent;
