"use client";
import React, { useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { LuLoader2 } from "react-icons/lu";
import { useToast } from "@/components/ui/use-toast";
import { useSession } from 'next-auth/react'

const AddNoteform = () => {
  const [processing, setProcessing] = useState(false);
  const {data:session, status} = useSession()
  const { toast } = useToast();
  
  const initval = {
    title: "",
    body: "",
  };

  const formValidation = Yup.object().shape({
    title: Yup.string()
      .required("please enter a title")
      .min(4, "at least 4 characters")
      .max(20, "max of 20 characters"),
    body: Yup.string().min(5, "at least 5 characters"),
  });

  const handleSubmit = async (values, { resetForm }) => {
    try {
      console.log(values);
      setProcessing(true);
      //creating a document to be stored/sent in database
      const jotter = {
        title: values.title,
        body: values.body,
        createdAt: new Date(),
        author: session?.user?.name
      };
      //adding jotter to the database
      const docRef = collection(db, "notes");
      await addDoc(docRef, jotter);

      toast({
        description: "Your note has been sent.",
      });
      resetForm();
      
    } catch (error) {
      console.error(error);
      alert("error adding notes");
    } finally {
      setProcessing(false);
    }
  };

  return (
    <main className="h-dvh flex items-center justify-center">
      <div className="w-[30rem] h-[30rem] rounded-md bg-white/30">
        <h1 className="uppercase lg:text-4xl text-2xl text-gray-800 font-bold text-center lg:p-7 p-5">
          add note
        </h1>
        <Formik
          initialValues={initval}
          onSubmit={handleSubmit}
          validationSchema={formValidation}
        >
          <Form className="p-3 flex flex-col gap-3">
            <div>
              <Field
                type="text"
                name="title"
                placeholder="title"
                className="w-full outline-none border-none"
              />

              <ErrorMessage
                name="title"
                component={"p"}
                className="text-red-500 text-sm"
              />
            </div>

            <div>
              <Field
                as="textarea"
                name="body"
                placeholder="Add notes"
                className="w-full outline-none border-none"
              />

              <ErrorMessage
                name="body"
                component={"p"}
                className="text-red-500 text-sm"
              />
            </div>

            <button
              type="submit"
              className="text-white font-bold px-3 py-2 rounded-md text-center w-full bg-slate-500"
            >
              {processing ? (
                <LuLoader2 className="text-2xl animate-spin" />
              ) : (
                "Addnote"
              )}
            </button>
          </Form>
        </Formik>
      </div>
    </main>
  );
};

export default AddNoteform;
