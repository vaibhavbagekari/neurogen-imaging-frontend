export const signupFormConfig = [
    {
      label: "Name",
      type: "text",
      name: "name",
      placeholder: "Enter your name",
      validation: {
        required: true,
        errorMessage: "Name is required"
      }
    },
    {
      label: "Email",
      type: "email",
      name: "email",
      placeholder: "Enter your email",
      validation: {
        required: true,
        errorMessage: "Email is required"
      }
    },
    {
      label: "Username",
      type: "text",
      name: "username",
      placeholder: "Enter your username",
      validation: {
        required: true,
        errorMessage: "Username is required"
      }
    },
    {
      label: "Password",
      type: "password",
      name: "password",
      placeholder: "Enter your password",
      validation: {
        required: true,
        errorMessage: "Password is required"
      }
    },
    {
      label: "Confirm Password",
      type: "password",
      name: "confirmPassword",
      placeholder: "Confirm your password",
      validation: {
        required: true,
        matchField: "password",  // Special rule to match the password
        errorMessage: "Passwords must match"
      }
    },
    {
      label: "Age",
      type: "number",
      name: "age",
      placeholder: "Enter your age",
      validation: {
        required: true,
        minValue: 1,  // Ensure age is valid
        errorMessage: "Age must be a valid number"
      }
    }
  ];
  
export const signupFormData={
    email: '',
    password: '',
    confirmPassword: '',
}