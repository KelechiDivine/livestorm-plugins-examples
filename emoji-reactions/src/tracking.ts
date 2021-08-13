import { Configuration } from '@livestorm/plugin'

export default function track(event) {
  fetch('https://hooks.zapier.com/hooks/catch/9346563/ov1du9y', {
    method: 'POST',
    body: JSON.stringify({
      period_id: Configuration.sessionId,
      event
    })
  })
}