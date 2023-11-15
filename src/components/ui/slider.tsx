import * as React from 'react'
import * as SliderPrimitive from '@radix-ui/react-slider'

import { cn } from '@/lib/utils'

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      'relative flex w-full touch-none select-none items-center bg-white/10',
      className
    )}
    {...props}>
    <SliderPrimitive.Track className='relative h-1.5 w-full grow overflow-hidden rounded-full bg-secondary'>
      <SliderPrimitive.Range className='absolute h-full bg-green-500' />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className='block h-2.5 w-2.5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring focus-visible:ring-green-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white' />
  </SliderPrimitive.Root>
))
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
