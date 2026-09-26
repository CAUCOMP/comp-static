import { useState } from 'react'
import AttendanceForm from './components/AttendanceForm'

const AttendancePage = () => {
    const [file, setFile] = useState(null)
    const [checked, setChecked] = useState(false)

    const handleSubmit = () => {
    // api 연결 후 
    setChecked(true)
  }

  return (
    <AttendanceForm
      title="출석을 위한 스터디 사진을 올려주세요."
      subTitle={checked ? "출석이 완료되었어요" : "출석은 스터디 시작 후 30분 내에만 가능해요"}
      file={file}
      onFileChange={(e) => setFile(e.target.files[0])}
      fileText="사진 첨부하기"
      onSubmit={handleSubmit}
      buttonText="출석하기"
    />
  )
}

export default AttendancePage