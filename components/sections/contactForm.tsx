'use client'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormMessage } from '../ui/form';
import { useTranslations } from 'next-intl';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';
import OnViewAnimation from '../onViewAnimation';
import { toast } from 'sonner';
import { Loader } from 'lucide-react';
import { cn } from '@/lib/utils';

const formSchema = z.object({
    name: z.string(),
    email: z.email(),
    phone: z.string(),
    subject: z.string().min(5).max(30),
    message: z.string().max(255)
})

function ContactForm() {
    const [isFetching, setIsFetching] = useState<boolean>(false);
    const t = useTranslations("Contact");
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: ""
        }
    });
    async function onSubmit(values:z.infer<typeof formSchema>){
        setIsFetching(true);
        try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },

        body: JSON.stringify({
          name: values.name,
          email: values.email,
          phone: values.phone,
          subject: values.subject,
          message: values.message,
          //lang: locale
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        toast.error(t("error"));
        setIsFetching(false);
        throw new Error(result.error || "Erreur serveur");
      }

      toast.success(t("success"));
      form.reset();
      setIsFetching(false);

    } catch (error: unknown) {
        if(error instanceof Error){
            toast.error(error.message || t("error"));
            console.error("Erreur:", error);
        }
        else {
            toast.error("Unknown error");
            console.error("Unknown error")
        }
    }
    }
  return (
    <section className="px-5 pt-6 pb-10 sm:pt-10 sm:pb-15 bg-neutral-900 text-white flex flex-col gap-6 sm:gap-10">
        <OnViewAnimation animation="fadeUp" duration={0.75} delay={0.2}>
            <h4>{"Contact"}</h4>
        </OnViewAnimation>
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <OnViewAnimation animation="fadeUp" duration={0.6} delay={0}>
                    <FormField control={form.control} name="name" render={({field})=>(
                        <FormItem>
                            <FormControl>
                                <Input {...field} placeholder={t("contact_name")}/>
                            </FormControl>
                            <FormMessage className="text-red-400"/>
                        </FormItem>
                    )} />
                </OnViewAnimation>
                <OnViewAnimation animation="fadeUp" duration={0.6} delay={0.2}>
                    <FormField control={form.control} name="email" render={({field})=>(
                        <FormItem>
                            <FormControl>
                                <Input {...field} placeholder={t("contact_mail")}/>
                            </FormControl>
                            <FormMessage className="text-red-400"/>
                        </FormItem>
                    )} />
                </OnViewAnimation>
                <OnViewAnimation animation="fadeUp" duration={0.6} delay={0.4}>
                    <FormField control={form.control} name="phone" render={({field})=>(
                        <FormItem>
                            <FormControl>
                                <Input {...field} placeholder={t("contact_phone")}/>
                            </FormControl>
                            <FormMessage className="text-red-400"/>
                        </FormItem>
                    )} />
                </OnViewAnimation>
                <OnViewAnimation animation="fadeUp" duration={0.6} delay={0.6}>
                    <FormField control={form.control} name="subject" render={({field})=>(
                        <FormItem>
                            <FormControl>
                                <Input {...field} placeholder={t("contact_subject")}/>
                            </FormControl>
                            <FormMessage className="text-red-400"/>
                        </FormItem>
                    )} />
                </OnViewAnimation>
                <OnViewAnimation animation="fadeUp" duration={0.6} delay={0.8}  className="col-span-1 sm:col-span-2">
                    <FormField control={form.control} name="message" render={({field})=>(
                        <FormItem>
                            <FormControl>
                                <Textarea {...field} placeholder={t("contact_message")}/>
                            </FormControl>
                            <FormMessage className="text-red-400"/>
                        </FormItem>
                    )} />
                </OnViewAnimation>
                <OnViewAnimation animation="popIn" duration={1} delay={0.6} className="col-span-1 sm:col-span-2">
                    <Button type="submit" size={"lg"} variant={"light"} className='w-full' disabled={isFetching}>{t("contact_send")}<Loader className={cn("animate-spin", isFetching ? "inline-block" : "hidden")}/></Button>
                </OnViewAnimation>
            </form>
        </Form>
    </section>
  )
}

export default ContactForm