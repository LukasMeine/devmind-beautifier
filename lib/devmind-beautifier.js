"use babel";

import DevmindBeautifierView from "./devmind-beautifier-view";
import { CompositeDisposable } from "atom";
var qs = require("qs");

export default {
  devmindBeautifierView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.devmindBeautifierView = new DevmindBeautifierView(
      state.devmindBeautifierViewState
    );
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.devmindBeautifierView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(
      atom.commands.add("atom-workspace", {
        "devmind-beautifier:toggle": () => this.toggle()
      })
    );
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.devmindBeautifierView.destroy();
  },

  serialize() {
    return {
      devmindBeautifierViewState: this.devmindBeautifierView.serialize()
    };
  },

  toggle() {
    panel = this;

    editor = atom.workspace.getActiveTextEditor();
    text = editor.getText().trim();
    fileName = editor.getTitle();
    ext = fileName
      .split(".")
      .pop()
      .trim();

    const url = "https://beautifier.devmind.io/format";
    data = { extension: ext.trim(), content: text.trim() };

    var http = new XMLHttpRequest();
    http.open("POST", url, true);

    //Send the proper header information along with the request
    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    http.onreadystatechange = function() {
      //Call a function when the state changes.
      if (http.readyState == 4 && http.status == 200) {
        if (typeof http.responseText.status === "undefined") {
          editor.setText(http.responseText);
          atom.notifications.addSuccess("Now your code looks fancy");
          panel.modalPanel.hide();
        } else {
          atom.notifications.addInfo("File extension not supported. Yet.");
        }
      }
      if (http.status !== 200) {
        console.log(http.status);
        panel.modalPanel.hide();
        atom.notifications.addError(
          "Something went wrong, please check your internet connection"
        );
      }
    };
    http.send(qs.stringify(data));
  }
};
