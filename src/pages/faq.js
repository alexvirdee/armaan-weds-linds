import React from "react"
import Navbar from "../components/layout/Navbar"
import Collapsible from "react-collapsible"
import styled from "styled-components"
import "@fontsource/barlow-condensed"

const data = [
  {
    id: 1,
    question: "Covid 19 Related Questions",
    answers: [
      {
        id: "a.",
        answer: [
          "We ask all guests to be vaccinated. If there are any issues/concerns please reach out to us privately.",
        ],
      },
      {
        id: "b.",
        answer: ["If traveling, PCR testing 72 hrs before arrival is a plus!"],
      },
    ],
  },
  {
    id: 2,
    question: "What is the dress code?",
    answers: [
      {
        id: "a.",
        answer: [
          {
            id: "i.",
            event: "Sangeet",
            innerAnswer: "Indian Formal",
          },
        ],
      },
      {
        id: "b.",
        answer: [
          {
            id: "i.",
            event: "Ceremony",
            innerAnswer: "Indian",
          },
        ],
      },
      {
        id: "c.",
        answer: [
          {
            id: "i.",
            event: "Reception",
            innerAnswer: "Beach Formal",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    question: "Can I bring a date?",
    answers: [
      {
        id: "a.",
        answer: [
          "While we love your little ones, our wedding is going to be an adults-only event so that everyone can relax and enjoy the evening. We appreciate you making arrangements ahead of time and leaving the kids at home so you can celebrate with us",
        ],
      },
    ],
  },
]

const FAQ = () => {
  console.log("faq json response ====> ", data)
  return (
    <>
      <Navbar />
      <Title>FAQ</Title>
      <Accordion>
        <CollapsibleSection trigger="Start here">
          <p>
            This is the collapsible content. It can be any element or React
            component you like.
          </p>
          <p>
            It can even be another Collapsible component. Check out the next
            section!
          </p>
        </CollapsibleSection>
      </Accordion>
    </>
  )
}

const Title = styled.h1`
  font-family: "Barlow Condensed";
  text-align: center;
`

const Accordion = styled.div``

const CollapsibleSection = styled(Collapsible)`
  background-color: green;
  padding: 8px;
`

export default FAQ
