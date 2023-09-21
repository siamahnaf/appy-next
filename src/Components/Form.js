/** @jsxImportSource theme-ui */
import { Box, Grid, Label, Input, Textarea, Button, Heading } from 'theme-ui';
import { useForm } from "react-hook-form";

import Icons from 'Utilis/Icons';

function Form() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data, e) => {
        e.target.reset();
        console.log("Message submited: " + JSON.stringify(data));
    };
    return (
        <Box sx={{ overflowY: 'scroll', height: "85%" }} className="container">
            <Heading as="h3" sx={styles.Heading}>Say Something</Heading>
            <Box as='form' onSubmit={handleSubmit(onSubmit)} sx={{ mr: '10px', ml: "2px" }}>
                <Grid columns={[2]}>
                    <Box sx={{ mb: '1rem' }}>
                        <Label htmlFor="name" sx={styles.Label}>Name</Label>
                        <Input
                            name="name"
                            id="name"
                            {...register("name", { required: true })}
                        />
                        {errors.name && errors.name.type === "required" && (
                            <span sx={styles.Error}><Icons icon="fluent:error-circle-12-filled" /> Please Enter Your Name!</span>
                        )}
                    </Box>
                    <Box sx={{ mb: '1rem' }}>
                        <Label htmlFor="email" sx={styles.Label}>Email</Label>
                        <Input
                            name="email"
                            id="email"
                            {...register(
                                "email",
                                {
                                    required: "Please enter an email addreess!",
                                    pattern: {
                                        value: /\S+@\S+\.\S+/,
                                        message: "The email you enter is invalid email!",
                                    },
                                },
                                { required: true }
                            )}
                        />
                        {errors.email && (
                            <span sx={styles.Error}><Icons icon="fluent:error-circle-12-filled" /> {errors.email.message}</span>
                        )}
                    </Box>
                </Grid>
                <Box sx={{ mb: '1rem' }}>
                    <Label htmlFor="subject" sx={styles.Label}>Subject</Label>
                    <Input
                        name="subject"
                        id="subject"
                        {...register(
                            "subject",
                            {
                                required: "Please enter your subject!",
                                minLength: {
                                    value: 5,
                                    message: "Subject should not be less than 5 characters!",
                                },
                                maxLength: {
                                    value: 25,
                                    message: "Subject should not be more than 25 characters!"
                                }
                            },
                            { required: true }
                        )}
                    />
                    {errors.subject && (
                        <span sx={styles.Error}><Icons icon="fluent:error-circle-12-filled" /> {errors.subject.message}</span>
                    )}
                </Box>
                <Box sx={{ mb: '1rem' }}>
                    <Label htmlFor="message" sx={styles.Label}>Message</Label>
                    <Textarea
                        name="message"
                        id="message"
                        rows={6}
                        {...register(
                            "message",
                            {
                                required: "Please add your message!",
                                minLength: {
                                    value: 25,
                                    message: "Message should not be less than 25 characters!",
                                },
                                maxLength: {
                                    value: 1000,
                                    message: "Message should not be more than 1000 characters!"
                                }
                            },
                            { required: true }
                        )}
                    />
                    {errors.message && (
                        <span sx={styles.Error}><Icons icon="fluent:error-circle-12-filled" /> {errors.message.message}</span>
                    )}
                </Box>
                <Box sx={{ mb: "10px" }}>
                    <Button type='submit'>Submit</Button>
                </Box>
            </Box >
        </Box >
    )
}
export default Form;

const styles = {
    Heading: {
        fontSize: "16px",
        mb: "2rem",
        fontWeight: 500,
        color: "background_primary"
    },
    Label: {
        mb: "8px",
        fontSize: "16px",
        color: "secondary"
    },
    Error: {
        color: "text_fourthly",
        fontSize: "14px",
        svg: {
            mb: '-1px'
        }
    }
}