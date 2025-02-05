const templates = [
  {
    id: "1",
    name: "Basic User Registration Form",
    description: "A survey to collect employee feedback.",
    status: "active",
    type: "private",
    createdBy: "admin_123",
    createdAt: "2024-12-01T08:00:00Z",
    updatedAt: "2024-12-10T15:30:00Z",
    formSchema: {
      form: {
        title: "User Registration",
        type: "object",
        required: ["username", "password", "email"],
        properties: {
          username: {
            type: "string",
            title: "Username",
          },
          password: {
            type: "string",
            title: "Password",
            minLength: 8,
          },
          email: {
            type: "string",
            format: "email",
            title: "Email",
          },
          agreeToTerms: {
            type: "boolean",
            title: "I agree to the terms and conditions",
          },
        },
      },
      ui:{
        password: {
          "ui:widget": "password",
        },
        agreeToTerms: {
          "ui:widget": "checkbox",
        },
      }
    },
  },
  {
    id: "2",
    name: "Survey Form with Multiple Choices",
    description: "A public survey to measure customer satisfaction.",
    status: "draft",
    type: "public",
    createdBy: "admin_456",
    createdAt: "2024-12-05T09:00:00Z",
    updatedAt: "2024-12-14T13:45:00Z",
    formSchema: {
      form: {
        title: "Feedback Survey",
        type: "object",
        properties: {
            satisfaction: {
              type: "string",
              title: "How satisfied are you with our service?",
              enum: ["Very Satisfied", "Satisfied", "Neutral", "Dissatisfied"],
            },
            features: {
              type: "array",
              title: "Which features do you like?",
              items: {
                type: "string",
                enum: ["Ease of Use", "Design", "Performance", "Support"],
              },
              uniqueItems: true,
            },
            suggestions: {
              type: "string",
              title: "Any suggestions for improvement?",
            },
          },
        },
      ui: {
        satisfaction: {
          "ui:widget": "radio",
        },
        features: {
          "ui:widget": "checkboxes",
        },
      }
    }
  },
  {
    id: "3",
    name: "Dynamic Form with Conditional Fields",
    description: "Gather feedback for our new product launch.",
    status: "active",
    type: "private",
    createdBy: "admin_789",
    createdAt: "2024-12-07T12:30:00Z",
    updatedAt: "2024-12-10T16:00:00Z",
    formSchema: {
      form: {
        title: "Dynamic Form",
        type: "object",
        properties: {
          subscribe: {
            type: "boolean",
            title: "Do you want to subscribe?",
          },
        },
        dependencies: {
          subscribe: {
            oneOf: [
              {
                properties: {
                  subscribe: {
                    const: true,
                  },
                  email: {
                    type: "string",
                    format: "email",
                    title: "Enter your email to subscribe",
                  },
                },
                required: ["email"],
              },
              {
                properties: {
                  subscribe: {
                    const: false,
                  },
                },
              },
            ],
          },
        },
      },
      ui: {
        subscribe: {
          "ui:widget": "checkbox",
        },
      }
    }
  },
  {
    id: "4",
    name: "Form with Nested Objects",
    description: "Assess public awareness on health issues.",
    status: "active",
    type: "public",
    createdBy: "admin_222",
    createdAt: "2024-12-02T10:15:00Z",
    updatedAt: "2024-12-10T10:15:00Z",
    formSchema: {
      form: {
        title: "Shipping Details",
        type: "object",
        properties: {
          recipient: {
            type: "string",
            title: "Recipient Name",
          },
          address: {
            type: "object",
            title: "Address",
            properties: {
              street: {
                type: "string",
                title: "Street",
              },
              city: {
                type: "string",
                title: "City",
              },
              zipCode: {
                type: "string",
                title: "ZIP Code",
              },
            },
          },
        },
      },
      ui: {
        address: {
          street: {
            "ui:placeholder": "123 Main St",
          },
          city: {
            "ui:placeholder": "Your City",
          },
          zipCode: {
            "ui:placeholder": "12345",
          },
        },
      }
    },
  },
  {
    id: "5",
    name: "Form with File Upload",
    description: "Reflect on the team's recent project performance.",
    status: "active",
    type: "private",
    createdBy: "admin_123",
    createdAt: "2024-12-11T08:00:00Z",
    updatedAt: "2024-12-13T11:30:00Z",
    formSchema: {
      form: {
        title: "Profile Picture Upload",
        type: "object",
        properties: {
          profilePicture: {
            type: "string",
            format: "data-url",
            title: "Upload your profile picture",
          },
        },
      },
      ui: {
        profilePicture: {
          "ui:widget": "file",
        },
      },
    },
  }
];

export default templates;