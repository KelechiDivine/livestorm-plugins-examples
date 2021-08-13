import i18n from '../i18n'

export default function () {
  return `
  <img src="https://plugin-assets.ireland.production.livestorm.io/emoji-reactions/preview-reaction.png" style="width: 100%">
  <button onclick="answer('activate')" class="btn btn-small btn-secondary">
    ${i18n().activationMessage.activate}
  </button>

  <button onclick="answer('dismiss')" class="btn btn-small">
    ${i18n().activationMessage.dismiss}
  </button>

  <button onclick="answer('preview')" class="btn btn-small">
    ${i18n().activationMessage.preview}
  </button>

  <script>
    function answer(response) {
      postMessage({ answer: response })
    } 
  </script>

  <style>
  body {
    margin: 0px;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
    font-size: 14px;
  }

  img {
    margin-bottom: 8px;
  }

  button {
    margin-right: 8px;
  }

  .btn {
    border-radius: 8px;
    border: none;
    font-weight: 600;
    padding: 0px 12px;
    background-color: #F4F3F8;
    color: #333334;
    cursor: pointer;
    font-size: 14px;
    transition: all .15s ease;
  }
  .btn:focus {
    border: none !important;
    outline: none !important;
  }
  .btn:hover {
    background-color: #efeff4;
  }

  .btn-secondary {
    background-color: #E2ECFE;
    color: #2a5ee4;
  }
  .btn-secondary:hover {
    background-color: #E2ECFE;
    color: #214dbe;
  }

  .btn-primary {
    background-color: #2a5ee4;
    color: #fff;
  }
  .btn-primary:hover {
    background-color: #214dbe;
  }

  .btn-small {
    height: 32px;
    width: auto;
  }
  </style>
  `
}