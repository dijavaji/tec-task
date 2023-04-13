import React from "react";

import { Form, FormGroup, Label, Input, FormText, Button } from "reactstrap";

export default function AddTaskComponent(props) {
  return (
    <div>
      <Form>
        <FormGroup>
          <Label for="title">Titulo</Label>
          <Input id="title" name="title" placeholder="" />
        </FormGroup>
        <FormGroup>
          <Label for="deadline">Fecha limite</Label>
          <Input id="deadline" name="deadline" placeholder="" type="date" />
        </FormGroup>
        <FormGroup className="row">
          <div className="col-sm-6">
          <Label for="startTime">Hora inicio</Label>
          <Input id="startTime" name="startTime" type="select">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
          </div>
          <div className="col-sm-6">
          <Label for="finishTime">Hora fin</Label>
          <Input id="finishTime" name="finishTime" type="select">
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
          <Input id="remind" name="remind" type="select">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup>

        <FormGroup>
          <Label for="repeat">Repetir</Label>
          <Input id="repeat" name="repeat" type="select">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup>

        <Button type="submit" className="m-1 btn btn-success">Crear tarea</Button>
      </Form>
    </div>
  );
}
