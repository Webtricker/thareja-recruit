// remove me
"use client";
import * as React from "react";

import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";
import { Bar, BarChart, ResponsiveContainer } from "recharts";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

const data = [
  {
    goal: 400,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 278,
  },
  {
    goal: 189,
  },
  {
    goal: 239,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 278,
  },
  {
    goal: 189,
  },
  {
    goal: 349,
  },
];
// remove me

const TestDawer = () => {
  const [goal, setGoal] = React.useState(350);

  function onClick(adjustment: number) {
    setGoal(Math.max(200, Math.min(400, goal + adjustment)));
  }

  return (
    <div>
     <Drawer direction='right'>
			<DrawerTrigger asChild>
				<Button variant='outline'>Open Drawer</Button>
			</DrawerTrigger>
			<DrawerContent className='top-0 right-0 left-auto mt-0 max-w-xl w-full rounded-none'>
				<div className='mx-auto w-full p-5 overflow-y-scroll overflow-x-hidden h-screen'>
					<DrawerHeader>
						<DrawerTitle>Theme Color Options</DrawerTitle>
						<DrawerDescription>
							* Selected option will be applied to all layout elements (navbar, toolbar, etc.). You can also create your own theme options and color
							schemes.
						</DrawerDescription>
					</DrawerHeader>
					<div className='p-4 pb-0 space-y-4'>
						<div className='bg-muted flex items-center justify-center rounded-lg h-32'>
							<p>Image 1</p>
						</div>
						<div className='bg-muted flex items-center justify-center rounded-lg h-32'>
							<p>Image 2</p>
						</div>
						<div className='bg-muted flex items-center justify-center rounded-lg h-32'>
							<p>Image 3</p>
						</div>
						<div className='bg-muted flex items-center justify-center rounded-lg h-32'>
							<p>Image 4</p>
						</div>
						<div className='bg-muted flex items-center justify-center rounded-lg h-32'>
							<p>Image 4</p>
						</div>
						<div className='bg-muted flex items-center justify-center rounded-lg h-32'>
							<p>Image 5</p>
						</div>
						<div className='bg-muted flex items-center justify-center rounded-lg h-32'>
							<p>Image 6</p>
						</div>
						<div className='bg-muted flex items-center justify-center rounded-lg h-32'>
							<p>Image 7</p>
						</div>
						<div className='bg-muted flex items-center justify-center rounded-lg h-32'>
							<p>Image 8</p>
						</div>
						<div className='bg-muted flex items-center justify-center rounded-lg h-32'>
							<p>Image 9</p>
						</div>
						<div className='bg-muted flex items-center justify-center rounded-lg h-32'>
							<p>Image 10</p>
						</div>
						<div className='bg-muted flex items-center justify-center rounded-lg h-32'>
							<p>Image 11</p>
						</div>
					</div>
				</div>
			</DrawerContent>
		</Drawer>
    </div>
  );
};

export default TestDawer;
