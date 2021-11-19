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
        id: "TBD"
      }
      // {
      //   id: "a. Sangeet",
      //   answer: [
      //     {
      //       id: 1,
      //       innerAnswer: "i. Indian Formal",
      //     },
      //   ],
      // },
      // {
      //   id: "b. Ceremony",
      //   answer: [
      //     {
      //       id: 2,
      //       innerAnswer: "i. Indian",
      //     },
      //   ],
      // },
      // {
      //   id: "c. Reception",
      //   answer: [
      //     {
      //       id: 3,
      //       innerAnswer: "i. Beach Formal",
      //     },
      //   ],
      // },
    ],
  },
  {
    id: 3,
    question: "Can I bring a date?",
    answers: [
      {
        id: "a. We want close family and friends on our special day, please refer to your invite!",
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

const Trigger = props => {
  return (
    <MainTriggerStyle>
      <div>{props.text}</div>
      <Chevron>&#8250;</Chevron>
    </MainTriggerStyle>
  )
}

const TriggerOpen = props => {
  return (
    <MainTriggerStyle>
      <div>{props.text}</div>
      <Chevron>&#8964;</Chevron>
    </MainTriggerStyle>
  )
}

const FAQ = () => {
  return (
    <>
      <Navbar />
      <Title>FAQ</Title>
      <FAQContainer>
        <Accordion>
          {data.map(item => {
            return (
              <>
                <CollapsibleSection
                  key={item.id}
                  trigger={<Trigger text={item.question} />}
                  triggerStyle={{ display: "block", cursor: "pointer" }}
                  triggerWhenOpen={<TriggerOpen text={item.question} />}
                >
                  {item.answers.map(answer => {
                    console.log(answer.answer)
                    return (
                      <>
                        {answer.answer !== undefined ? (
                          <>
                            <CollapsibleSection
                              trigger={<Trigger text={answer.id} />}
                              triggerStyle={{
                                display: "block",
                                cursor: "pointer",
                                paddingLeft: "25px",
                                paddingRight: "15px",
                              }}
                              triggerWhenOpen={<TriggerOpen text={answer.id} />}
                            >
                              <CollapsibleAnswers>
                                {answer.answer.map(target => {
                                  return (
                                    <InnerAnswer key={target.id}>
                                      {target.innerAnswer}
                                    </InnerAnswer>
                                  )
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
      </FAQContainer>
    </>
  )
}

const Title = styled.h1`
  font-family: "Barlow Condensed";
  text-align: center;
`

const FAQContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const MainTriggerStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 8px;
`

const Chevron = styled.div`
  font-family: "Barlow Condensed";
  font-size: 1.4rem;
`

const Accordion = styled.div`
  width: 60vw;
  padding: 15px;
  font-family: "Barlow Condensed";

  @media (max-width: 768px) {
    width: 90vw;
  }
`

const CollapsibleSection = styled(Collapsible)`
  border: 1px solid lightgray;
  padding: 10px;

  &:hover {
    background-color: #FCB2A9;
  }
`

const CollapsibleAnswers = styled.p`
  padding-left: 20px;
`

const InnerAnswer = styled.p`
  padding-left: 35px;
  margin-bottom: 10px;
`

export default FAQ
