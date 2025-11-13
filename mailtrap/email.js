import { 
        VERIFICATION_EMAIL_TEMPLATE,
        PASSWORD_RESET_REQUEST_TEMPLATE,
        PASSWORD_RESET_SUCCESS_TEMPLATE } from "./emailTemplates.js";
import { mailtrapClient, sender } from "./mailtrap.config.js";

export const sendVerificationEmail = async (email, verificationToken )=>{
    const recipient = [{email}];

    try {
        const response = await mailtrapClient.send({
            from: sender,
            to: recipient,
            subject:"Verify your Email",
            html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}",verificationToken),
            category: "Email verification"
        })

        console.log("Verification email sent successfully", response)
    } catch (error) {
        console.log("Error sending verfication email",error)
        throw new Error(`Error sending verification email: ${error}`)
    }
}

export const sendWelcomeEmail = async (email, name)=>{
    const recipient = [{email}];
    try {
        const res = await mailtrapClient.send({
            from: sender,
            to: recipient,
            template_uuid:"b40c117b-23e8-4302-9be5-82c4e4a78ea4",
            template_variables: {
                "company_info_name": "NDRS Frontend Developer",
                "name": name
            }
        })
        console.log("Welcome email sent successfully", res)
    } catch (error) {
        console.log("Error sending welcome email",error)
        throw new Error(`Error sending welcome email: ${error}`)
    }
}

export const sendResetPasswordEmail = async (email, resetUrl)=>{
    const recipient = [{email}];
    try {
        const res = await mailtrapClient.send({
            from: sender,
            to: recipient,
            subject: "Password Reset Request",
            html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetUrl),
            category: "Password Reset"
        })
        console.log("Password reset email sent successfully", res)
    } catch (error) {
        console.log("Error sending password reset email", error)
        throw new Error(`Error sending password reset email: ${error}`)
    }
}

export const sendPasswordResetSuccessEmail = async (email)=>{
    const recipient = [{email}];
    try {
        const res = await mailtrapClient.send({
            from: sender,
            to: recipient,
            subject: "Password Reset Successful",
            html: PASSWORD_RESET_SUCCESS_TEMPLATE,
            category: "Password Reset Confirmation"
        })
        console.log("Password reset success email sent successfully", res)
    } catch (error) {
        console.log("object", error)
    }
}