import React from "react";
import {Formik} from "formik";
import {FormControl, FormLabel, Input, FormErrorMessage, HStack, Button, Box} from "@chakra-ui/react";
import * as yup from "yup";

const PaymentFormDetails = ({onClose, payWithPaystack}) => {
    const validationSchema = yup.object().shape({
        email: yup.string().required("Your email address is required").email("Please input a valid email address"),
        number: yup.string().required("Your phone number is required")
    });
    return (
        <Formik validationSchema={validationSchema} initialValues={{email: "", number: ""}} onSubmit={values => payWithPaystack(values.email, values.number)
        }>
            {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                errors,
                touched,
                isValid,
                isSubmitting,
                dirty
              }) => (
                <form onSubmit={handleSubmit}>
                    <FormControl isInvalid={errors.email && touched.email}>
                        <FormLabel>Email</FormLabel>
                        <Input name="email" type="email"  placeholder="customer@email.com" value={values.email} onChange={handleChange} onBlur={handleBlur} />
                        {errors.email && touched.email && <FormErrorMessage>{errors.email}</FormErrorMessage> }
                    </FormControl>

                    <FormControl mt={4} isInvalid={errors.number && touched.number}>
                        <FormLabel>Phone Number</FormLabel>
                        <Input placeholder="02836648399" name="number" value={values.number} onChange={handleChange} type="text" onBlur={handleBlur}  />
                        {errors.number && touched.number && <FormErrorMessage>{errors.number}</FormErrorMessage> }
                    </FormControl>
                    
                    <HStack mt={4} justifyContent="flex-end">
                    <Button isLoading={isSubmitting} disabled={isSubmitting || !isValid || !dirty} type="submit" bg="#1DBF73" color="#fff" _hover={{bg: "green.600", color: "#fff"}}>Confirm & Pay</Button>
                        <Button type="button" onClick={() => {
                            onClose();
                        }}>Cancel</Button>
                    </HStack>
                </form>
            )}
        </Formik>
    )
}

export default PaymentFormDetails;