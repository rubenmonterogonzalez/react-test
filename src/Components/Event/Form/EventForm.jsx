import React from "react";
import cuid from 'cuid';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { createEvent, updateEvent } from "../eventAction";
import { Formik, Form } from "formik";
import * as Yup from 'yup';
import MyTextInput from "../../../App/Common/Form/MyTextInput";
import MyTextArea from "../../../App/Common/Form/MyTextArea";
import MySelectInput from "../../../App/Common/Form/MySelectInput";
import { categoryData } from "../../../App/Api/categoryOptions";
import MyDateInput from "../../../App/Common/Form/MyDateInput";

export default function EventForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const match = { params: useParams() };
  const selectedEvent = useSelector(state => state.event.events.find(e => e.id === match.params.id));

  const initialValues = selectedEvent ?? {
    title: '',
    category: '',
    description: '',
    city: '',
    venue: '',
    date: '',
  }

  const validationSchema = Yup.object({
    title: Yup.string().required('You must provide a title'),
    // category: Yup.string().required('You must provide a category'),
    description: Yup.string().required('You must provide a description'),
    city: Yup.string().required('You must provide a city'),
    venue: Yup.string().required('You must provide a venue'),
    date: Yup.string().required('You must provide a date'),

  })

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-md mb-6 mt-12 m-auto max-w-[300px] sm:max-w-[600px]">
      <div className="container">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            selectedEvent ?
              dispatch(updateEvent({ ...selectedEvent, ...values }))
              : dispatch(createEvent({
                ...values,
                id: cuid(),
                hostedBy: '',
                attendees: [],
                hostPhotoURL: '/Assets/images/user-icon.png',
              }));
            navigate('/events')
          }}
        >
          {({ values, handleChange, handleSubmit }) => (
            <Form className="px-3 ui form">
              <h6 className="mt-3 font-medium text-[#0891b2]">EVENT DETAILS</h6>
              <MyTextInput name="title" placeholder="Event Title" />
              <MySelectInput name="category" placeholder="Event Category" options={categoryData} />
              <MyTextArea name="description" placeholder="Description" />
              <h6 className="mt-3 font-medium text-[#0891b2]">EVENT LOCATION DETAILS</h6>
              <MyTextInput name="city" placeholder="City" />
              <MyTextInput name="venue" placeholder="Venue" />
              <MyDateInput 
                name="date" 
                type="date" 
                placeholderText="Event Date"
                timeFormat="HH:mm"
                showTimeSelect
                timeCaption="time"
                dateFormat="MMMM d, yyyy h:mm a" 
                />

              <div className="flex justify-end mb-3">
                <Link to={'/events'} type="submit" className="mr-3 mt-3 text-white bg-gradient-to-r from-black to-gray-300 hover:bg-gradient-to-br hover:text-gray-800 focus:text-gray-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Cancel</Link>
                <button type="submit" className="mr-3 mt-3 text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br hover:text-gray-800 focus:text-gray-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Submit</button>
              </div>
            </Form>
          )}

        </Formik>

      </div>
    </div>
  )
}