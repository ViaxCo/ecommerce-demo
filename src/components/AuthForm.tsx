import {
  Box,
  Button,
  chakra,
  Checkbox,
  Flex,
  FormControl,
  FormErrorMessage,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import {
  Formik,
  Form as FormikForm,
  Field,
  FormikHelpers,
  FieldProps,
} from "formik";
import { FbIcon } from "./ContactDetails";
import { BiExit } from "react-icons/bi";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import * as Yup from "yup";

type Props = {
  authType: string;
};

interface Values {
  email: string;
  password: string;
}

// Give the components chakra props
const Form = chakra(FormikForm);
const ExitIcon = chakra(BiExit);
const VisibleEye = chakra(AiFillEye);
const InvisibleEye = chakra(AiFillEyeInvisible);

const AuthForm = ({ authType }: Props) => {
  const [showPassword, setShowPassword] = useState(false);

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string()
      .min(8, "Must be at least 8 characters")
      .required("Required"),
  });

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={(values: Values, actions: FormikHelpers<Values>) => {
        setTimeout(() => {
          console.log("submitted", values);
          actions.setSubmitting(false);
          actions.resetForm();
        }, 2000);
      }}
      validationSchema={validationSchema}
    >
      {props => (
        <Form
          action="/"
          maxW="480px"
          px={6}
          pt={6}
          pb={12}
          boxShadow="lg"
          m="auto"
          //   @ts-ignore
          mt={{ base: "130px", smallTablet: "152px" }}
        >
          <VStack spacing={8}>
            <Heading fontSize="2xl" textTransform="uppercase" color="red.500">
              {authType}
            </Heading>
            <Field name="email">
              {({ field, form }: FieldProps<any, Values>) => (
                <FormControl
                  w="100%"
                  isInvalid={form.errors.email ? form.touched.email : undefined}
                >
                  {/* field: { name, value, onChange, onBlur } */}
                  <Input
                    {...field}
                    id="email"
                    type="email"
                    placeholder="Email Address"
                    _placeholder={{
                      color: "gray.600",
                    }}
                    bg="blackAlpha.200"
                    py={7}
                    autoComplete="on"
                  />
                  <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="password">
              {({ field, form }: FieldProps<any, Values>) => (
                <FormControl
                  w="100%"
                  isInvalid={
                    form.errors.password ? form.touched.password : undefined
                  }
                >
                  <InputGroup>
                    {/* field: { name, value, onChange, onBlur } */}
                    <Input
                      {...field}
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      _placeholder={{
                        color: "gray.600",
                      }}
                      bg="blackAlpha.200"
                      py={7}
                      autoComplete="on"
                    />
                    <InputRightElement h="100%" mr={1}>
                      <IconButton
                        aria-label="Show or Hide password"
                        borderRadius="full"
                        colorScheme="red"
                        variant="link"
                        size="sm"
                        icon={
                          showPassword ? (
                            <VisibleEye size={22} />
                          ) : (
                            <InvisibleEye size={22} />
                          )
                        }
                        onClick={() => setShowPassword(!showPassword)}
                      />
                    </InputRightElement>
                  </InputGroup>
                  <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Flex
              justify="space-between"
              w="100%"
              fontWeight="500"
              display={authType === "login" ? "flex" : "none"}
            >
              <Checkbox colorScheme="red" color="gray.700">
                <Text fontSize={["0.9375rem", "1rem"]}>Remember me</Text>
              </Checkbox>
              <Link
                color="red"
                textDecoration={["underline", "none"]}
                fontSize={["0.9375rem", "1rem"]}
              >
                <Text>Forgot Password?</Text>
              </Link>
            </Flex>
            <Button
              type="submit"
              isLoading={props.isSubmitting}
              textTransform="uppercase"
              w="100%"
              colorScheme="red"
              py={[6, 7]}
              fontWeight="700"
            >
              <ExitIcon size={26} flex={1} />
              <Text flex={6} px={1}>
                {authType !== "login" ? "Create Account" : authType}
              </Text>
              <Box visibility="hidden" flex={1} />
            </Button>
            <Link w="100%" _hover={{ textDecoration: "none" }}>
              <Button
                textTransform="uppercase"
                colorScheme="facebook"
                w="100%"
                py={[6, 7]}
                fontWeight="700"
              >
                <FbIcon size={26} flex={1} />
                <Text flex={8} pl={2}>
                  {authType} with Facebook
                </Text>

                <Box
                  visibility="hidden"
                  flex={1}
                  //   @ts-ignore
                  d={{ base: "none", mobileM: "block" }}
                />
              </Button>
            </Link>
          </VStack>
        </Form>
      )}
    </Formik>
  );
};

export default AuthForm;
