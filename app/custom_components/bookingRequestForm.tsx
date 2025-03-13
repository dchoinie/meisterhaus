import React, { useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Room } from "./home/rooms";

interface BookingRequestFormProps {
  onSubmit: (data: z.infer<typeof bookingFormSchema>) => void;
  onCancel: () => void;
  room: Room;
}

export const bookingFormSchema = z
  .object({
    fullName: z.string().min(1, {
      message: "Full name is required",
    }),
    email: z.string().email({
      message: "Invalid email address",
    }),
    phone: z.string().min(1, {
      message: "Phone number is required",
    }),
    checkInDate: z.date({
      required_error: "Check-in date is required",
    }),
    checkOutDate: z.date({
      required_error: "Check-out date is required",
    }),
    numberOfGuests: z.number().min(1, {
      message: "Number of guests is required",
    }),
    numberOfChildren: z.number().min(0, {
      message: "Number of children is required",
    }),
    room: z.string(),
  })
  .refine(
    (data) => {
      return data.checkOutDate > data.checkInDate;
    },
    {
      message: "Check-out date must be after check-in date",
      path: ["checkOutDate"], // This shows the error on the checkOutDate field
    }
  );

const BookingRequestForm = ({
  onSubmit,
  onCancel,
  room,
}: BookingRequestFormProps) => {
  const [checkInOpen, setCheckInOpen] = React.useState(false);
  const [checkOutOpen, setCheckOutOpen] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof bookingFormSchema>>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      checkInDate: undefined,
      checkOutDate: undefined,
      numberOfGuests: 0,
      numberOfChildren: 0,
      room: room.name,
    },
  });

  const handleCancel = () => {
    form.reset();
    onCancel();
  };

  const onSubmitForm = async (data: z.infer<typeof bookingFormSchema>) => {
    setIsSubmitting(true);
    await onSubmit(data);
    setTimeout(() => {
      form.reset();
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <Form {...form}>
      <form
        action="https://formspree.io/f/xvgzvwea"
        method="POST"
        onSubmit={(e) => {
          const isValid = form.trigger();
          if (!isValid) {
            e.preventDefault();
          } else {
            const values = form.getValues();
            onSubmitForm(values);
          }
        }}
        className="space-y-6 font-cinzel-decorative text-primary-800"
      >
        {/* Hidden inputs for date fields and room */}
        <input type="hidden" name="room" value={room.name} />
        <input
          type="hidden"
          name="checkInDate"
          value={
            form.getValues("checkInDate")
              ? format(form.getValues("checkInDate"), "yyyy-MM-dd")
              : ""
          }
        />
        <input
          type="hidden"
          name="checkOutDate"
          value={
            form.getValues("checkOutDate")
              ? format(form.getValues("checkOutDate"), "yyyy-MM-dd")
              : ""
          }
        />
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="checkInDate"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Check-in Date</FormLabel>
              <Popover open={checkInOpen} onOpenChange={setCheckInOpen}>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={`w-full pl-3 text-left font-normal ${
                        !field.value && "text-muted-foreground"
                      }`}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={(date) => {
                      field.onChange(date);
                      setCheckInOpen(false);
                    }}
                    disabled={(date) =>
                      date < new Date(new Date().setHours(0, 0, 0, 0))
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="checkOutDate"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Check-out Date</FormLabel>
              <Popover open={checkOutOpen} onOpenChange={setCheckOutOpen}>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={`w-full pl-3 text-left font-normal ${
                        !field.value && "text-muted-foreground"
                      }`}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={(date) => {
                      field.onChange(date);
                      setCheckOutOpen(false);
                    }}
                    disabled={(date) =>
                      date < new Date(new Date().setHours(0, 0, 0, 0))
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="numberOfGuests"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Number of Guests</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="numberOfChildren"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Number of Children</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        <div className="flex gap-4">
          <Button
            variant="outline"
            className="flex-1 font-cinzel-decorative"
            type="button"
            onClick={handleCancel}
          >
            Cancel
          </Button>
          <Button
            variant="default"
            className="flex-1 bg-primary-500 text-white font-cinzel-decorative"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default BookingRequestForm;
