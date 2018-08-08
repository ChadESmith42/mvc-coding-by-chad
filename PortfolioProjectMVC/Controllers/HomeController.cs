using PortfolioProjectMVC.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Web;
using System.Web.Mvc;

namespace PortfolioProjectMVC.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "My skills, education, and experience.";

            return View();
        }

        [HttpGet]
        public ActionResult Contact()
        {
            ViewBag.Message = "Let's start a discussion about your next project.";

            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Contact(ContactViewModel contact)
        {
            if (ModelState.IsValid)
            {
                //How to send email:
                //Construct a string value that will represent the mail message

                //SET DEFAULT VALUES
                contact.DateSent = DateTime.Now;
                contact.Subject = "From Website: " + contact.Subject;

                string messageContent = $"Name: {contact.FirstName} {contact.LastName} <br/> " +
                    $"Email: {contact.Email}<br/> Subject: {contact.Subject}<br/>" +
                    $"<h4>Message<h4> {contact.Message}<br/> Date Sent: {contact.DateSent}";

                //Create a MailMessage Object (System.Net.Mail)
                //This is the envelop for our letter (messageContent)
                //FROM address is first, TO address is next, SUBJECT, and MESSAGE
                MailMessage m = new MailMessage("no-reply@codingbychad.com",
                    "chad@codingbychad.com", contact.Subject, messageContent);

                //allow for HTML in the body
                m.IsBodyHtml = true;
                // replyto set to reply to the original emailer, not your website.
                m.ReplyToList.Add(contact.Email);
                //Priority
                //m.Priority = MailPriority.High; //optional setting

                //SMTP Client
                SmtpClient client = new SmtpClient("mail.codingbychad.com");

                client.Credentials = new NetworkCredential("no-reply@codingbychad.com", "M@774ew.");

                using (client)
                {
                    try
                    {
                        client.Send(m);
                    }//end try
                    catch (Exception)
                    {
                        ViewBag.ErrorMessage = "There was an error sending your message. Please try again.";

                        return View(contact);
                    }//end catch

                }//end Client

                return View("ContactConfirm", contact);

            }//end IF contact form validation is TRUE;

            //if Validation fails, returns user to the contact form and repopulate the form with the data that they entered originally
            return View(contact);
        }

        public ActionResult Work()
        {
            ViewBag.Message = "Nothing keeps your skills sharp and honed like constantly working on something. These are my completed projects and a few in the works.";

            return View();
        }

        public ActionResult AsYouWish()
        {
            ViewBag.Message = "That's right. When I was you age, the internet was called books. And this is a special book. It was the book my father used to read to me when I was sick, and I used to read it to your father. And today, I'm gonna read it to you ...";

            return View();
        }

        public ActionResult Cohort()
        {
            ViewBag.Message = "No one develops in a vacuum. These are the great people who I have worked with and made me a better developer.";

            return View();
        }

        public ActionResult Snake()
        {
            ViewBag.Message = "Eat all you can, just not yourself.";

            return View();
        }

    }//end HomeController class
}//end namespace