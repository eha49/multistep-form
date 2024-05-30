import React from "react";
import styled from "styled-components";
import FormTitle from "../FormTitle/FormTitle";
import FormDescription from "../FormDescription/FormDescription";
import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";
import { UserInfoContext } from "../UserInfoProvider/UserInfoProvider";

function PersonalInfoForm() {
  const { user, handleChange } = React.useContext(UserInfoContext);
  return (
    <>
      <FormTitle>Personal Info</FormTitle>
      <FormDescription>
        Please provide your name, email address and phone number.
      </FormDescription>

      <Form
        action="#"
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <InputWrapper>
          <TextInput
            type="text"
            label="name"
            name="name"
            placeholder="e.g. Stephen King"
            required={true}
            value={user.name}
            onChange={handleChange}
          />
        </InputWrapper>
        <InputWrapper>
          <TextInput
            type="email"
            label="email address"
            name="email"
            placeholder="e.g. stephenking@lorem.com"
            required={true}
            value={user.email}
            onChange={handleChange}
          />
        </InputWrapper>
        <InputWrapper>
          <TextInput
            type="tel"
            label="phone number"
            name="number"
            placeholder="e.g. 9419025412"
            required={true}
            pattern="[0-9]{10}"
            value={user.number}
            onChange={handleChange}
          />
        </InputWrapper>
        <ButtonWrapper>
          <LinkButton>Go Back</LinkButton>
          <Button>Next Step</Button>
        </ButtonWrapper>
      </Form>
    </>
  );
}

const Form = styled.form`
  margin-top: 32px;
  min-height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 18px;
`;

const ButtonWrapper = styled.div`
  margin-top: auto;
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
`;

const LinkButton = styled(Button)`
  padding: 0;
  background-color: transparent;
  color: var(--cool-gray);
  font-weight: var(--weight-bold);

  &:hover {
    color: var(----marine-blue);
    background: transparent;
  }

  &:focus-visible {
    outline: 1px solid currentColor;
  }
`;

export default PersonalInfoForm;
