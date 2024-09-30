import React from 'react'
import Githubsignin from '@/app/component/Githubsignin'
import Googlesignin from '@/app/component/Googlesignin'


const Page = () => {
  return (
    <div className="flex flex-col justify-center items-center h-dvh gap-8">
      <div className="bg-gray-100 w-[50%] h-[50%] rounded-full flex flex-col justify-center items-center gap-8">
        <h1>Sign in to Jottify</h1>
        <div className="flex flex-col gap-4">
          <Googlesignin />
          <Githubsignin />
        </div>
      </div>
    </div>
  );
}

export default Page