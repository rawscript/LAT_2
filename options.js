// options.js
document.addEventListener('DOMContentLoaded', function () {
  // Load options when the options page is loaded
  loadOptions();

  const saveOptionsButton = document.getElementById('save-options');
  saveOptionsButton.addEventListener('click', saveOptions);
});

function saveOptions() {
  // Retrieve values from input fields
  const languageSelect = document.getElementById('language-select').value;
  const shortcutInput = document.getElementById('shortcut-input').value;
  const fileNameInput = document.getElementById('fileName').value;
  const playbackSpeedInput = document.getElementById('playback-speed').value;

  // Save options to Chrome storage
  chrome.storage.sync.set({
    language: languageSelect,
    shortcut: shortcutInput,
    fileName: fileNameInput,
    playbackSpeed: playbackSpeedInput
  }, function () {
    // Notify that options were saved.
    alert('Options saved!');
  });
}

function loadOptions() {
  // Retrieve options from Chrome storage
  chrome.storage.sync.get({
    language: 'en-US',
    shortcut: 'Ctrl+Shift+K',
    fileName: 'transcription.txt',
    playbackSpeed: '1'
  }, function (options) {
    // Set values in the input fields
    document.getElementById('language-select').value = options.language;
    document.getElementById('shortcut-input').value = options.shortcut;
    document.getElementById('fileName').value = options.fileName;
    document.getElementById('playback-speed').value = options.playbackSpeed;
  });
}
