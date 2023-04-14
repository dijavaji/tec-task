import React from "react";
import {useMutation} from "@apollo/client";
import { FormGroup, Label, Input, Button, Form } from "reactstrap";
import { Formik } from 'formik';
import * as Yup from "yup";
import {toast} from "react-toastify";

import {REGISTER} from "../../services/TaskService";

export default function AddTaskComponent(props) {
  const [registerTask] = useMutation(REGISTER);

  const handleSubmit = async (formData)=>{
    try {
        //console.log(formData);
        const newTask = formData;
          //delete nuevoUsuario.repeatPass;
          const result = await registerTask({
            variables:{
              input:{
                name: newTask.title,
                limitDate: newTask.deadline,
                complete: false,
                createdBy:"web-user"
              }
            }
          });
          //console.log(result);
          toast.success("Tarea registrada correctamente");

        } catch (e) {
          toast.error(e.message);
          console.error(e);
        }
  };

  return (
    <div>
    <Formik initialValues={initialValues()} onSubmit={(values, { setSubmitting }) =>  handleSubmit(values)} validationSchema={registerValidationSchema}>
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
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
          </div>
          <div className="col-sm-6">
          <Label for="finishTime">Hora fin</Label>
          <Input id="finishTime" name="finishTime" type="select" {...formik.getFieldProps('finishTime')}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
          </div>
        </FormGroup>


        <FormGroup>
          <Label for="remind">Recordar</Label>
          <Input id="remind" name="remind" type="select" {...formik.getFieldProps('remind')} >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup>

        <FormGroup>
          <Label for="repeat">Repetir</Label>
          <Input id="repeat" name="repeat" type="select" {...formik.getFieldProps('repeat')}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup>

        <Button type="submit" className="m-1 btn btn-success">Crear tarea</Button>
      </Form>
    )
   }
   </Formik>
    </div>
  );
}

const registerValidationSchema = Yup.object({
  title: Yup.string().required("El nombre es obligatorio").min(3, "El nombre debe contener al menos 3 caracteres"),
  limitDate: Yup.date().default(() => new Date()),
}
);

function initialValues(){
  return(
    {
      title:'',
      deadline:'',
      startTime:'',
      finishTime:'',
      remind:'',
      repeat:'',
    }
  );
}
