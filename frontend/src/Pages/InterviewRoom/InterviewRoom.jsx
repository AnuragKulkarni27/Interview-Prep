import React from 'react'
import { useParams } from 'react-router-dom'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt'
import useAuthStore from '../../stores/authStore'

const InterviewRoom = () => {
    const {auth } = useAuthStore()
    const {roomId} = useParams()
    const myMeeting = async(element) => {
      const AppId = 903789777
      const serverSecret = '08278a07057d28288924d1df2358a2ef'
      const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(AppId,serverSecret,roomId,Date.now().toString(),auth.user.username)
      const zc = ZegoUIKitPrebuilt.create(kitToken)
      zc.joinRoom({
        container: element,
        scenario: {
          mode: ZegoUIKitPrebuilt.OneONoneCall,
        },
        showScreenSharingButton: true
      })
    }

  return (
    <div>Room: {roomId}
      <div ref={myMeeting}/>
    </div>
  )
}

export default InterviewRoom