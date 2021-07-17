import React from "react";
import {Formik,Form} from 'formik';
import * as Yup from 'yup';
import FormikControl from "./FormikControl";



const FormikContainer = (props)=> {
    const initialValue = {
        name:"",
        date:null,
    };
    const onSubmit = (value,onSubmitProps) => {

        let month = value.date.getUTCMonth() + 1;
        let day = value.date.getUTCDate();
        let year = value.date.getUTCFullYear();
        props.createNewPost(month+"/"+day+"/"+year,value.name);
        props.changeInputBox(false);
        onSubmitProps.setSubmitting(false);
        onSubmitProps.resetForm();
    };
    const validationSchema = Yup.object({
        name:Yup.string().required('required'),
        date:Yup.date().required("required").nullable(),
    });
    return (
        <Formik initialValues={initialValue} onSubmit={onSubmit} validationSchema={validationSchema}>
            {
                (formik)=> {

                    return (

                        <Form autoComplete="off">
                            <FormikControl type='text' name="name" control= "input" label="Name"/>
                            <FormikControl  name="date" control= "date" label="DatePicker"/>
                            <button type="submit" className="btn">submit</button>
                        </Form>
                    )
                }
            }
        </Formik>
    )
}

export default FormikContainer