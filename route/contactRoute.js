const router = require("express").Router()
const nodeMailer = require("nodemailer")

router.post('/contact',(req,res) => {
    let data = req.body;
    if(data.name.length ===0 || data.email.length ===0 || data.message.length === 0){
        return res.json({msg:"Please fill all the fields!"});
    }

        let smtpTransporter = nodeMailer.createTransport({
            service: 'Gmail',
            port:465,
            auth:{
                user:"pallavishirodkar1505@gmail.com",
                pass:"Usa*2021!!!!"
            }
        })

        let mailOptions = {
            from: data.email,
            to:"pallavishirodkar1505@gmail.com",
            subject: `Your got new messgae from: ${data.name}`,
            html:`
            <h3>Informations</h3>
            <ul>
                <li>Name: ${data.name}</li>
                <li>Email: ${data.email}</li>
                <li>Phone: ${data.phone}</li>
            </ul>
            <h3>Message: ${data.message}</h3>
            `
        }

        smtpTransporter.sendMail(mailOptions, ()=>{
            try{
                console.log("Erro100")
                if(error) return  res.status(400).json({msg:"Please fill all the fields!"})
                res.status(200).json({msg:"Thank you for contacting Me! I will reach out to you soon as possible..."})
            }catch(error)
            {
                console.log("Erro101"+error)
                if(error)
                {
                    return res.status(500).json({msg:"Server Error 123"})
                }
            }
        })
})

module.exports = router

