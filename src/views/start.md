# 环境搭建

1. 安装 HomeBrew 

   [使用镜像快速安装brew](https://www.cnblogs.com/joyce33/p/13376752.html)

   ```sh
   /bin/bash -c "$(curl -fsSL https://gitee.com/ineo6/homebrew-install/raw/master/install.sh)"
   ```

   

2. 安装 oh-my-zsh

   [Oh-My-Zsh 安装 & 配置](https://zhuanlan.zhihu.com/p/35283688)

   1. ```shell
      sh -c "$(curl --insecure -fsSL https://gitee.com/mirrors/oh-my-zsh/raw/master/tools/install.sh)"
      ```

   2. git clone other plugins

      - 使用 SSH 连接到 GitHub

        - ```sh
          # Generate
          ssh-keygen -t ed25519 -C "<comment>"
          # Copy
          tr -d '\n' < ~/.ssh/id_ed25519.pub | pbcopy
          # Test
          ssh -T git@gitlab.example.com
          # Docs
          # https://docs.github.com/cn/authentication/connecting-to-github-with-ssh
          ```

      - [Git error: "Host Key Verification Failed" when connecting to remote repository](https://stackoverflow.com/questions/13363553/git-error-host-key-verification-failed-when-connecting-to-remote-repository)

        - ```shell
          # Method
          ssh-keyscan -t rsa github.com >> ~/.ssh/known_hosts
          ```

        - 

      - 

        - 

   3. 插件安装

      - [Autojump](https://github.com/wting/autojump) 、zsh-autosuggestions、zsh-syntax-highlighting

        - ```she
          brew install autojump
          ```

        - ```shell
          plugins=(autojump)
          ```

      - 配置

        - ```she
          # If you come from bash you might have to change your $PATH.
          # export PATH=$HOME/bin:/usr/local/bin:$PATH
          # 一些路径变量
          # n=npm
          # pn=pnpm
          export home=~/
          
          # 重新定义的变量
          # alias n="$n"
          # alias pn="$pn"
          alias nio="npm install --prefer-offline"
          alias ps="pnpm serve"
          alias nrs="npm run serve"
          alias cl='clear'
          alias h='history'
          alias gdo='gp && gl && glg'
          alias c.='code .'
          # Path to your oh-my-zsh installation.
          export ZSH=$HOME/.oh-my-zsh
          export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
          [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
          # rust
          export RUSTUP_DIST_SERVER=https://mirrors.ustc.edu.cn/rust-static
          export RUSTUP_UPDATE_ROOT=https://mirrors.ustc.edu.cn/rust-static/rustup
          # Set name of the theme to load --- if set to "random", it will
          # load a random theme each time oh-my-zsh is loaded, in which case,
          # to know which specific one was loaded, run: echo $RANDOM_THEME
          # See https://github.com/ohmyzsh/ohmyzsh/wiki/Themes
          ZSH_THEME="af-magic"
          
          # Set list of themes to pick from when loading at random
          # Setting this variable when ZSH_THEME=random will cause zsh to load
          # a theme from this variable instead of looking in $ZSH/themes/
          # If set to an empty array, this variable will have no effect.
          # ZSH_THEME_RANDOM_CANDIDATES=( "robbyrussell" "agnoster" )
          
          # Uncomment the following line to use case-sensitive completion.
          # CASE_SENSITIVE="true"
          
          # Uncomment the following line to use hyphen-insensitive completion.
          # Case-sensitive completion must be off. _ and - will be interchangeable.
          # HYPHEN_INSENSITIVE="true"
          
          # Uncomment one of the following lines to change the auto-update behavior
          # zstyle ':omz:update' mode disabled  # disable automatic updates
          # zstyle ':omz:update' mode auto      # update automatically without asking
          # zstyle ':omz:update' mode reminder  # just remind me to update when it's time
          
          # Uncomment the following line to change how often to auto-update (in days).
          # zstyle ':omz:update' frequency 13
          
          # Uncomment the following line if pasting URLs and other text is messed up.
          # DISABLE_MAGIC_FUNCTIONS="true"
          
          # Uncomment the following line to disable colors in ls.
          # DISABLE_LS_COLORS="true"
          
          # Uncomment the following line to disable auto-setting terminal title.
          # DISABLE_AUTO_TITLE="true"
          
          # Uncomment the following line to enable command auto-correction.
          # ENABLE_CORRECTION="true"
          
          # Uncomment the following line to display red dots whilst waiting for completion.
          # You can also set it to another string to have that shown instead of the default red dots.
          # e.g. COMPLETION_WAITING_DOTS="%F{yellow}waiting...%f"
          # Caution: this setting can cause issues with multiline prompts in zsh < 5.7.1 (see #5765)
          # COMPLETION_WAITING_DOTS="true"
          
          # Uncomment the following line if you want to disable marking untracked files
          # under VCS as dirty. This makes repository status check for large repositories
          # much, much faster.
          # DISABLE_UNTRACKED_FILES_DIRTY="true"
          
          # Uncomment the following line if you want to change the command execution time
          # stamp shown in the history command output.
          # You can set one of the optional three formats:
          # "mm/dd/yyyy"|"dd.mm.yyyy"|"yyyy-mm-dd"
          # or set a custom format using the strftime function format specifications,
          # see 'man strftime' for details.
          # HIST_STAMPS="mm/dd/yyyy"
          
          # Would you like to use another custom folder than $ZSH/custom?
          # ZSH_CUSTOM=/path/to/new-custom-folder
          
          # Which plugins would you like to load?
          # Standard plugins can be found in $ZSH/plugins/
          # Custom plugins may be added to $ZSH_CUSTOM/plugins/
          # Example format: plugins=(rails git textmate ruby lighthouse)
          # Add wisely, as too many plugins slow down shell startup.
          plugins=(
              git
              zsh-autosuggestions
              zsh-syntax-highlighting
              zsh-nvm
              autojump
          )
          
          source $ZSH/oh-my-zsh.sh
          
          # User configuration
          
          # export MANPATH="/usr/local/man:$MANPATH"
          
          # You may need to manually set your language environment
          # export LANG=en_US.UTF-8
          
          # Preferred editor for local and remote sessions
          # if [[ -n $SSH_CONNECTION ]]; then
          #   export EDITOR='vim'
          # else
          #   export EDITOR='mvim'
          # fi
          
          # Compilation flags
          # export ARCHFLAGS="-arch x86_64"
          
          # Set personal aliases, overriding those provided by oh-my-zsh libs,
          # plugins, and themes. Aliases can be placed here, though oh-my-zsh
          # users are encouraged to define aliases within the ZSH_CUSTOM folder.
          # For a full list of active aliases, run `alias`.
          #
          # Example aliases
          # alias zshconfig="mate ~/.zshrc"
          # alias ohmyzsh="mate ~/.oh-my-zsh"
          
          ```

        - 1

        - 

   4. 🪜 [魔戒](https://www.mojie.cyou/#/knowledge)

      - [ClashX](https://ghproxy.com/https://github.com/yichengchen/clashX/releases/download/1.90.0/ClashX.dmg)

   5. software

      1. Vs code
      2. iTerm
      3. Google
      4. WPS
      5. Postman
      6. TinyCal
      7. Subline
      8. Typora
      9. uTools

      

      

   