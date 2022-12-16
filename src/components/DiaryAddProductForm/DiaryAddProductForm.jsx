import { Box } from 'components/Box';
import { useMediaQuery } from 'react-responsive';
import { Formik, ErrorMessage, } from 'formik';
import * as yup from 'yup';
import {
  NameError,
  GramsError,
  NameInput,
  GramsInput,
  Label,
  Button,
  FormWrapper,
} from './DiaryAddProductForm.styled';

const schema = yup.object().shape({
    name: yup.string().required(),
    grams: yup.number().required()
})

export const DairyAddProductForm = () => {
  const mobile = useMediaQuery({ query: '(max-width: 426px)' });

  const initialValues = {
    name: '',
    grams: '',
  };

  const handleSubmit = (values) => {
    const params = { ...values }
    schema.validate(params)
    console.log('params', params);
  }

  return (
    <Box p="16px" w="503px" position="relative">
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <FormWrapper>
          <Label>
            <NameInput 
              type="text" 
              placeholder="Enter product name"
              name="name"
            />
            <ErrorMessage name="name" component={NameError} />
          </Label>
          <Label>
            <GramsInput 
              type="text" 
              placeholder="Grams"
              name="grams"
             />
            <ErrorMessage name="grams" component={GramsError} />
          </Label>

          {mobile ? <Button type="submit">Add</Button> : <Button type="submit">+</Button>}
        </FormWrapper>
      </Formik>
    </Box>
  )
}