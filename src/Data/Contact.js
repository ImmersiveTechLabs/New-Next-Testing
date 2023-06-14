
const Data = {
    title: "Contact Us",
    description: "Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.",
    inputs: [
        {
            id: "email",
            type: "email",
            label: "Your email",
            placeholder: "your email",
            required: true,
        },
        {
            id: "subject",
            type: "text",
            label: "Subject",
            placeholder: "Let us know how we can help you",
            required: true,
        },
        {
            id: "message",
            type: "textarea",
            label: "Your message",
            placeholder: "Leave a comment...",
            required: false,
        },

    ]
}

export default Data;