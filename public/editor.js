const editorWorkspaceApp = {
    get editorPlacehoder() {
      return document.getElementById('editor-placeholder');
    },
  
    get editorWorkspace() {
      return document.getElementById('editor-workspace');
    },
  
    get editorChrome() {
      return this.editorWorkspace.querySelector('.editor-chrome');
    },
  
    get editorContentWrapper() {
      return this.editorChrome.querySelector('.editor-content-wrapper');
    },
  
    get loader() {
      return this.editorContentWrapper.querySelector('#hrz-idx-ldr');
    },
  
    get iframe() {
      return this.editorContentWrapper.querySelector('#editor');
    },
  
    init: function() {
      this.initLoaderToggling();
  
      const _sizeRef = this.editorPlacehoder;
      if (!_sizeRef) {
        return;
      }
  
      const _editorWorkspace = this.editorWorkspace;
      if (!_editorWorkspace) {
        return;
      }
  
      const _rect = _sizeRef.getBoundingClientRect();
      _editorWorkspace.style.top = _rect.top + 'px';
      _editorWorkspace.style.left = _rect.left + 'px';
      _editorWorkspace.style.width = _rect.width + 'px';
      _editorWorkspace.style.height = _rect.height + 'px';
      _editorWorkspace.style.display = 'block';
    },
  
    initLoaderToggling: function() {
      const _this = this;
  
      // We assume that iframe will be recreated everytime on its url changing
      const observer = new MutationObserver(function(mutationsList, observer) {
        for (var mutation of mutationsList) {
          if (mutation.type === 'childList' && mutation.addedNodes.item(0) === _this.iframe) {
            _this.showLoader();
          }
        }
      });
  
      observer.observe(this.editorContentWrapper, { childList: true });
    },
  
    showLoader: function() {
      if (this.loader) {
        this.loader.classList.remove('hide');
      }
    },
  
    hideLoder: function() {
      if (this.loader) {
        this.loader.classList.add('hide');
      }
    },
  };
  