import React from "react";
import styled from "styled-components";
import FormTitle from "../FormTitle/FormTitle";
import FormDescription from "../FormDescription/FormDescription";
import TextInput from "../TextInput/TextInput";

function PersonalInfoForm() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");

  return (
    <>
      <FormTitle>Personal Info</FormTitle>
      <FormDescription>
        Please provide your name, email address and phone number.
      </FormDescription>

      <Form action="#">
        <InputWrapper>
          <TextInput
            type="text"
            label="name"
            required={true}
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </InputWrapper>
        <InputWrapper>
          <TextInput
            type="email"
            label="email address"
            required={true}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </InputWrapper>
        <InputWrapper>
          <TextInput
            type="tel"
            label="phone number"
            required={true}
            pattern="[0-9]{10}"
            value={phoneNumber}
            onChange={(event) => setPhoneNumber(event.target.value)}
          />
        </InputWrapper>
      </Form>
    </>
  );
}

const Form = styled.form`
  margin-top: 32px;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 18px;
`;
export default PersonalInfoForm;
