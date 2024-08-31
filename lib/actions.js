'use server';
import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

 //client and server side 'use' statement cannot be in same file

export async function shareMeal(formData){ // executes on server and action on share meal suggest executes form submission on server
    const meal = {
      title: formData.get('title'),
      summary: formData.get('summary'),
      image: formData.get('image'),
      instructions: formData.get('instructions'),
      creator: formData.get('name'),
      creator_email: formData.get('email'),
    }

    await saveMeal(meal);
    revalidatePath('/meals') // /, layout to do all pages
    redirect('/meals')
  }
