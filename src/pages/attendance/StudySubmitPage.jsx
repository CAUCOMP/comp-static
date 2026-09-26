import { useState } from 'react'
import AttendanceForm from './components/AttendanceForm'

const StudySubmitPage = () => {
    const [file, setFile] = useState(null)
    const [submitted, setSubmitted] = useState(false)  

  const handleSubmit = () => {
    // api 연결 후 제출 성공하면 
    setSubmitted(true)
  }

  return (
    <AttendanceForm
      title="이번주 스터디 과제를 제출해주세요."
      subTitle={submitted ? "과제 제출이 완료되었어요!" : "아직 제출 전이에요!"}
      file={file}
      onFileChange={(e) => setFile(e.target.files[0])}
      fileText="과제 제출하기"
      onSubmit={handleSubmit}
      buttonText="제출하기"
    />
  )
}

export default StudySubmitPage