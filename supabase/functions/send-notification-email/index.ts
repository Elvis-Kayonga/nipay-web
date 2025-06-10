
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')

serve(async (req) => {
  const { type, data } = await req.json()
  
  if (!RESEND_API_KEY) {
    return new Response(
      JSON.stringify({ error: 'Missing RESEND_API_KEY' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    )
  }

  let subject = ''
  let htmlContent = ''
  
  if (type === 'waitlist') {
    subject = `New Waitlist Submission - ${data.name}`
    htmlContent = `
      <h2>New Waitlist Submission</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Business Name:</strong> ${data.businessName}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phoneNumber}</p>
      <p><strong>Monthly Volume:</strong> ${data.monthlyVolume}</p>
      ${data.businessEarnings ? `<p><strong>Business Earnings:</strong> ${data.businessEarnings}</p>` : ''}
      ${data.fundingNeeded ? `<p><strong>Funding Needed:</strong> ${data.fundingNeeded}</p>` : ''}
      ${data.interestRate ? `<p><strong>Interest Rate:</strong> ${data.interestRate}</p>` : ''}
      ${data.businessType ? `<p><strong>Business Type:</strong> ${data.businessType}</p>` : ''}
      <p><strong>Submitted at:</strong> ${new Date().toLocaleString()}</p>
    `
  } else if (type === 'investor') {
    subject = `New Investor Interest - ${data.name}`
    htmlContent = `
      <h2>New Investor Interest</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Type:</strong> ${data.investorType}</p>
      ${data.organizationName ? `<p><strong>Organization:</strong> ${data.organizationName}</p>` : ''}
      <p><strong>Message:</strong></p>
      <div style="background: #f5f5f5; padding: 15px; border-left: 3px solid #2ecc71; margin: 10px 0;">
        ${data.message.replace(/\n/g, '<br>')}
      </div>
      <p><strong>Submitted at:</strong> ${new Date().toLocaleString()}</p>
    `
  }

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'NiPay Notifications <notifications@nipay.rw>',
        to: ['kayongaelvis@nipay.rw'],
        subject: subject,
        html: htmlContent,
      }),
    })

    if (res.ok) {
      const data = await res.json()
      return new Response(JSON.stringify(data), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      })
    } else {
      const error = await res.text()
      console.error('Resend API error:', error)
      return new Response(JSON.stringify({ error }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      })
    }
  } catch (error) {
    console.error('Error sending email:', error)
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
})
