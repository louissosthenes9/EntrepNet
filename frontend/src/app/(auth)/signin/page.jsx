import React from 'react'
import MaxWidthWrapper from '@/components/MaxwidthWrapper';
import ImageGrid from '@/components/ImageGrid'
export default function page() {
  return (
    <> 
    <MaxWidthWrapper>
      <div className="flex gap-x-24">
       <div>form</div>
        <ImageGrid />
      </div>
    </MaxWidthWrapper>
    </>
  )
}
