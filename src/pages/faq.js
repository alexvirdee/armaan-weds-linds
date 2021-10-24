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
        id: "a. We ask all guests to be vaccinated. If there are any issues/concerns please reach out to us privately.",
      },
      {
        id: "b. If traveling, PCR testing 72 hrs before arrival is a plus!",
      },
    ],
  },
  {
    id: 2,
    question: "What is the dress code?",
    answers: [
      {
        id: "a. Sangeet",
        answer: [
          {
            id: 1,
            innerAnswer: "Indian Formal",
          },
        ],
      },
      {
        id: "b. Ceremony",
        answer: [
          {
            id: 2,
            innerAnswer: "Indian",
          },
        ],
      },
      {
        id: "c. Reception",
        answer: [
          {
            id: 3,
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
        id: "a. We want close family and friends on our special day, please refer to your invite….",
      },
    ],
  },
  {
    id: 4,
    question: "Are kids invited?",
    answers: [
      {
        id: "a. While we love your little ones, our wedding is going to be an adults-only event so that everyone can relax and enjoy the evening. We appreciate you making arrangements ahead of time and leaving the kids at home so you can celebrate with us",
      },
    ],
  },
]

const FAQ = () => {
  return (
    <>
      <Navbar />
      <Title>FAQ</Title>
      <Accordion>
        {/* <CollapsibleSection trigger="Start here">
          <p>
            This is the collapsible content. It can be any element or React
            component you like.
          </p>
          <p>
            It can even be another Collapsible component. Check out the next
            section!
          </p>
        </CollapsibleSection> */}
        {data.map(item => {
          return (
            <>
              <CollapsibleSection
                key={item.id}
                trigger={item.question}
                triggerStyle={{ display: "block", cursor: "pointer" }}
              >
                {item.answers.map(answer => {
                  console.log(answer.answer)
                  return (
                    <>
                      {answer.answer !== undefined ? (
                        <>
                          <CollapsibleSection trigger={answer.id}>
                            <CollapsibleAnswers>
                              {answer.answer.map(target => {
                                return <span key={target.id}>{target.innerAnswer}</span>
                              })}
                            </CollapsibleAnswers>
                          </CollapsibleSection>
                        </>
                      ) : (
                        <CollapsibleAnswers>{answer.id}</CollapsibleAnswers>
                      )}
                    </>
                  )
                })}
              </CollapsibleSection>
            </>
          )
        })}
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
  border: 2px solid magenta;
  padding: 8px;
  background-color: lightgray;
`

const CollapsibleAnswers = styled.p`
  border: 2px solid magenta;
  padding: 8px;
`

export default FAQ
