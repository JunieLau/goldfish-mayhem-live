/* All bilingual copy and media paths for the Goldfish Mayhem livestream site.
   Edit this file to update wording, captions, or assets. */
window.GM = {
  ui: {
    langs: {
      en: { en: "English", zh: "English" },
      zh: { en: "中文", zh: "中文" },
      both: { en: "English + 中文", zh: "English + 中文" }
    },
    motto: {
      en: "The best way to predict the future is to create it.",
      zh: "预测未来最好的方式，是创造它。"
    },
    play: { en: "Play", zh: "播放" },
    chapterOf: { en: "Chapter", zh: "章节" },
    promptTag: { en: "Discussion prompt", zh: "讨论引导" },
    liveTag: { en: "Live audience questions", zh: "现场观众提问" },
    callouts: {
      gap: { en: "To be confirmed", zh: "待补充" },
      editorial: { en: "Editorial note", zh: "编辑说明" },
      conflict: { en: "Source difference", zh: "来源差异" },
      idea: { en: "What I am exploring", zh: "构想 / 仍在探索" }
    },
    footer: {
      en: "Goldfish Mayhem — by Junie Lau. A livestream companion site, not a replacement for junielau.com.",
      zh: "Goldfish Mayhem — by Junie Lau. 这是一份直播讲解用的配套页面，并不是 junielau.com 的替代网站。"
    }
  },

  sourcesMap: {
    zcool: { en: "Zcool talk", zh: "站酷讲稿" },
    deck: { en: "Zcool deck", zh: "站酷 PPT" },
    interview: { en: "Interview", zh: "访谈" },
    site: { en: "Official site", zh: "官网" },
    ig: { en: "Instagram", zh: "Instagram" },
    xhs: { en: "Xiaohongshu", zh: "小红书" },
    yt: { en: "YouTube", zh: "YouTube" },
    sources: { en: "SOURCES.md / LinkedIn", zh: "SOURCES.md / LinkedIn" },
    stills: { en: "Official stills", zh: "官方剧照" },
    draft: { en: "Draft advice", zh: "建议草案" }
  },

  hero: {
    titleZh: "金魚街大亂鬥",
    ghost: "金魚街",
    lead: {
      en: "Hello — I’m Junie. This page is here so I can walk you through who I am, why I made Goldfish Mayhem, how the film was built, and what I want to explore next.",
      zh: "Hello，大家好，我是 Junie。这个页面是我在直播里介绍自己、讲述《金魚街大亂鬥》为什么诞生、它是怎样做出来的，以及我接下来想探索什么时，会一起打开的讲稿页。",
      source: "zcool"
    },
    images: {
      type: "images",
      hero: true,
      items: [
        {
          src: "assets/deck/character-poster.jpg",
          altEn: "Key art of three girls from Goldfish Mayhem, with the title 金魚街大亂鬥",
          altZh: "《金魚街大亂鬥》三位女孩主视觉，标题为金魚街大亂鬥",
          capEn: "Key art from the Zcool talk deck, with the confirmed on-asset title 金魚街大亂鬥.",
          capZh: "来自站酷演讲PPT的主视觉。片名在画面上的写法是「金魚街大亂鬥」。",
          source: "deck",
          contain: true,
          natural: true
        },
        {
          src: "assets/deck/street-banner.jpg",
          altEn: "A crowded street under a red banner reading 2026 金魚街小霸王争霸赛",
          altZh: "一条热闹的街道，横幅上写着2026金魚街小霸王争霸赛",
          capEn: "A street image from the same deck. I do not treat this as a photograph of the real childhood street downstairs — the film’s Goldfish Street is fictional, even though it grows out of real places.",
          capZh: "同一份PPT里的街道画面。我不会把它说成家楼下那条真实金鱼街的照片——电影里的金鱼街是虚构的，只是从真实的地方生长出来。",
          source: "deck"
        }
      ]
    },
    note: {
      en: "On my official site, the Chinese title is written in simplified characters as 金鱼街大乱斗. In this page I keep 金魚街大亂鬥, the form used on the film’s key art and in the Zcool talk.",
      zh: "我的官网中文页使用简体写法「金鱼街大乱斗」。这个页面里，影片标题沿用设定图和站酷讲稿中的「金魚街大亂鬥」。",
      source: "site"
    }
  },

  chapters: [
    {
      id: "intro",
      num: "01",
      titleEn: "Introducing myself",
      titleZh: "自我介绍",
      navEn: "Introducing myself",
      navZh: "自我介绍",
      ghost: "创造者",
      blocks: [
        {
          type: "lede",
          en: "Each time someone asks me to introduce myself, I hesitate a little. In recent years people have grown used to calling me a director. If I can choose, I still prefer the word creator — 创造者. I only gradually had the chance to become a director after I started using AI. Before that, I was an art director: the person beside the director, turning the world in their head into something you could actually see — the sets, the costumes, the props, the colour and texture of a whole world.",
          zh: "其实每次有人让我介绍自己，我都会有点纠结。这几年，大家比较习惯叫我导演，但如果让我自己选，我还是更喜欢「创造者」这个称呼。因为我是开始使用 AI 以后，才慢慢有机会成为导演的。在那之前，我是一名美术指导，就是在导演身边，负责把他脑海里的世界变成现实的人。电影里的场景长什么样，人物穿什么衣服、用什么道具，整个世界是什么颜色和质感，都是我以前做的事情。",
          source: "zcool"
        },
        {
          type: "images",
          cols: 2,
          items: [
            {
              src: "assets/deck/junie-bookshelf.jpg",
              altEn: "Junie Lau at a keyboard by a window, with bookshelves behind her",
              altZh: "Junie Lau 坐在窗边的键盘前，身后是书架",
              capEn: "A portrait used in the Zcool deck.",
              capZh: "站酷PPT中使用的肖像。",
              source: "deck"
            },
            {
              src: "assets/deck/junie-red.jpg",
              altEn: "Junie Lau in a red sculptural dress, holding a golden trophy",
              altZh: "Junie Lau 身穿红色雕塑感礼服，手持金色奖杯",
              capEn: "Another portrait from the same deck.",
              capZh: "同一份PPT中的另一张肖像。",
              source: "deck",
              portrait: true
            }
          ]
        },
        {
          type: "paras",
          items: [
            {
              en: "I am a director and creative based between London and Shanghai. I make futuristic visual work across fashion films, music videos, advertising, and AI cinema.",
              zh: "我是一名常驻伦敦和上海两地的导演和创意工作者。我的创作领域包括时尚电影、音乐录像、广告，以及 AI 电影。",
              source: "interview"
            },
            {
              en: "The path there still feels quite ordinary to me. I grew up in Guangdong, later studied in London, worked in fashion and advertising, and only then, because of AI, found my way into directing. When Forbes came to interview me, I was genuinely surprised.",
              zh: "前段时间，《福布斯》给我做了一篇专访。我收到邀请的时候很惊讶，因为我一直觉得自己的经历挺普通的：一个在广东长大的女孩，后来去伦敦读书，在时尚和广告影视行业摸爬滚打，最后因为 AI，走上了导演这条路。",
              source: "zcool"
            },
            {
              en: "Apart from “director”, some people have also started calling me an artist. I still feel a certain awe for that word. As a child I loved the photographer Chen Man, because she had such a distinct personal eye. So today I would rather talk about how I actually got here than recite a list of results.",
              zh: "不过，除了导演，最近也有人开始叫我艺术家。我对这个词其实一直挺敬畏的。小时候我很喜欢摄影师陈漫，因为她有特别鲜明的个人审美。所以比起列举成绩，我更想聊聊自己到底是怎么走到这里的。",
              source: "zcool"
            }
          ]
        },
        {
          type: "para",
          en: "In 2018, during my master’s at University of the Arts London, I started working with early artificial intelligence, virtual reality, mixed reality, and interactive art. In 2020, during the pandemic, I returned to China. I had few industry contacts then, and becoming a director overnight was not realistic, so I chose a job close to directing: art direction. On set I worked with carpenters, prop makers, gaffers and cinematographers, and learned how to make an idea physically real.",
          zh: "2018 年，我在伦敦艺术大学读硕士，开始接触早期的人工智能、虚拟现实、混合现实，还有交互艺术。2020 年疫情期间，我回到中国。那时候没有什么行业人脉，想直接当导演不太现实，所以我选择了一个离导演很近的工作：美术指导。在片场，我跟木工、道具师、灯光师、摄影师一起工作，学习怎么把一个想法真正做出来。",
          source: "zcool"
        },
        {
          type: "images",
          cols: 3,
          items: [
            {
              src: "assets/deck/drawing-1999.jpg",
              altEn: "A childhood oil-pastel drawing of a sun, a house and a yellow winged creature",
              altZh: "一幅儿童油画棒画，上面有太阳、房子和一只黄色的长翅膀生物",
              capEn: "A drawing from Children’s Day in 1999 — sun, house, and all kinds of strange things, made with oil pastels.",
              capZh: "1999 年六一儿童节的画：太阳、房子，还有各种奇奇怪怪的东西，是用油画棒画的。",
              source: "zcool",
              natural: true
            },
            {
              src: "assets/deck/child-1999.jpg",
              altEn: "A childhood photograph of Junie Lau",
              altZh: "Junie Lau 童年照片",
              capEn: "A childhood photograph shown in the Zcool deck beside that drawing.",
              capZh: "站酷PPT里，和那幅画放在一起的童年照片。",
              source: "deck",
              portrait: true
            },
            {
              src: "assets/deck/art-director.jpg",
              altEn: "Film-set photographs from art-direction work: built streets, monitors and a studio floor",
              altZh: "美术指导工作中的片场照片：搭建的街道、监视器和摄影棚",
              capEn: "Later, as an art director, I built worlds with timber frames, metal structures, fibreglass, 3D printing, LED screens and physical props.",
              capZh: "后来做美术指导时，我开始用木结构、金属骨架、玻璃钢、3D 打印、LED 屏幕和实体道具，搭建真实的场景。",
              source: "zcool"
            }
          ]
        },
        {
          type: "paras",
          items: [
            {
              en: "In February 2022 I began using an early tool called Disco Diffusion. You had to generate an image in a way that felt almost like writing code, and each picture was slow. But it was the first time I felt that the strange, abstract images in my head could appear in this way.",
              zh: "直到 2022 年 2 月，我开始使用一个叫 Disco Diffusion 的早期 AI 工具。那时候生成一张图很慢，操作方式也有点像写代码。但我第一次觉得，原来脑子里那些很奇怪、很抽象的画面，可以用这种方式呈现出来。",
              source: "zcool"
            },
            {
              en: "I am easily taken by a three-minute enthusiasm, and I like trying new things. Looking back, though, one thing I never quite gave up: a love of art, and the work of creating worlds. The tools changed — from oil pastels, to sets, to prompts, code and models — but the wish stayed the same: to make the world in my imagination exist.",
              zh: "我其实是个很容易三分钟热度的人，喜欢不断尝试新东西。但最近回头看，我发现这么多年，好像只有一件事一直没有放弃：就是对艺术的热爱，还有创造世界这件事。变的是工具和身份，没变的是我一直想把想象中的世界做出来。",
              source: "zcool"
            }
          ]
        },
        {
          type: "images",
          cols: 3,
          items: [
            {
              src: "assets/deck/disco-diffusion.jpg",
              altEn: "A screenshot of an early Disco Diffusion interface",
              altZh: "早期 Disco Diffusion 界面截图",
              capEn: "Disco Diffusion, from the Zcool deck’s “creating worlds” timeline.",
              capZh: "站酷PPT「创造世界」时间线中的 Disco Diffusion。",
              source: "deck"
            },
            {
              src: "assets/deck/the-court-still.jpg",
              altEn: "A still from The Court, the AI music video for Peter Gabriel",
              altZh: "为 Peter Gabriel 创作的 AI 音乐录像《The Court》剧照",
              capEn: "A still from The Court, made for Peter Gabriel.",
              capZh: "为 Peter Gabriel 创作的《The Court》画面。",
              source: "deck"
            },
            {
              src: "assets/deck/the-court-grid.jpg",
              altEn: "A grid of stills from The Court",
              altZh: "《The Court》画面拼图",
              capEn: "More frames from The Court, as shown in the talk deck.",
              capZh: "站酷PPT中《The Court》的更多画面。",
              source: "deck"
            }
          ]
        },
        {
          type: "para",
          en: "What really changed the direction of my career was an AI music video I made for Peter Gabriel in 2023. It won the global championship of Stability AI’s #DiffuseTogether competition. The work later received a silver award at an international AI film festival — in a later interview I said this was the Silver Award at the second Runway International AI Film Festival — and more people began to come to me for collaborations. Slowly I moved from art direction into directing.",
          zh: "真正改变我职业方向的，是 2023 年为音乐人 Peter Gabriel 创作的一支 AI MV。它获得了 Stability AI 举办的比赛全球冠军。后来作品又拿到了国际 AI Film Festival 的银奖；在后来的访谈里，我说明这是第二届 Runway 国际 AI 电影节的银奖。越来越多人开始找我合作，我也慢慢从美术指导走到了导演的位置。",
          source: "zcool"
        },
        {
          type: "quote",
          en: "The best way to predict the future is to create it.",
          zh: "预测未来最好的方式，是创造它。",
          citeEn: "The theme I shared on the Zcool stage.",
          citeZh: "我在站酷台上分享的主题。",
          source: "zcool"
        },
        {
          type: "para",
          en: "After I began making work with AI, I was invited to collaborate with OpenAI, Google and ByteDance. Some of those partners gave me enough room not only to finish a film, but to put in questions I really care about. What If, Mother, made with OpenAI, comes from a question I had been carrying: if I had never existed, what kind of life would my mother have lived? Dear “Stranger”, made with Google, is about my grandmother. I almost never told her “I love you” to her face; after she was gone, I tried to finish, on screen, a conversation that never happened in life.",
          zh: "开始使用 AI 创作以后，我陆续收到一些合作邀请，包括和 OpenAI、Google、字节跳动的项目。很幸运，有些合作方给了我比较大的创作空间。我和 OpenAI 合作的《What If, Mother》，来自一个我一直在想的问题：如果这个世界上从来没有我，我的妈妈会过着怎样的人生？和 Google 合作的《Dear “Stranger”》，则是关于我奶奶的故事。以前我很少当面跟她说「我爱你」，等她离开以后，我试着用影像去完成一段现实里没能发生的对话。",
          source: "zcool"
        },
        {
          type: "para",
          en: "The fashion brand REVAN later invited me to make images for a new season, taking inspiration from a blind box. I was not handed a brief first; we imagined together what kind of world those little characters might live in. The work also became an exhibition, and I appeared as an artist in their campaign. I feel AI is changing the old client–agency relationship: a filmmaker is no longer only the person who executes at the end, but can be invited earlier, when a world is still being built.",
          zh: "时尚品牌 REVAN 邀请我为一个新季度时尚系列，以盲盒为灵感创作影像。我不是先拿到一份需求，而是一起想象：这些小角色如果有自己的生活，会住在什么样的世界里？最后作品也做成了线下展览，而我也作为艺术家出现在他们新系列的时尚大片里面。我觉得 AI 让甲乙方关系正在改变。创作者不只是最后负责执行的人，也有机会更早地参与一个世界的构建。",
          source: "zcool"
        },
        {
          type: "para",
          en: "From the beginning of last year I also started to receive invitations from independent film companies overseas, to develop original film IPs with writers and production teams. There is the science-fiction story ZERO, the youth road story 51IT, the women’s revenge action film 猩红木兰, the cyber police story MADAM P!NK, and, most recently, Goldfish Mayhem — 金魚街大亂鬥. They often share one thing: the heroines are not necessarily perfect. They can be impulsive, rebellious, even make a complete mess. I like characters who feel alive in that way.",
          zh: "从去年年初开始，我也陆续收到海外独立电影公司的邀请，和编剧、制作团队一起开发原创电影 IP。这里有科幻故事《ZERO》，青春爱情公路故事《51IT》，女性复仇动作片《猩红木兰》，还有赛博女警故事《MADAM P!NK》，以及最近推出的《金魚街大亂鬥》。它们经常有一个共同点：女主角不一定完美。她们可能冲动、叛逆，甚至把事情搞得一团糟。我反而很喜欢这样鲜活的角色。",
          source: "zcool"
        },
        {
          type: "callout",
          kind: "conflict",
          en: "On the Zcool slides, some of those titles appear in other forms: ZEЯRO, 51IST, 猩紅木蘭, MADAM PINK, and 金魚街大亂鬥 × WONDERSTUDIOS. I am not collapsing them into a single official spelling here.",
          zh: "在站酷PPT里，这些片名还有另外的写法：ZEЯRO、51IST、猩紅木蘭、MADAM PINK，以及「金魚街大亂鬥 × WONDERSTUDIOS」。这里我并列写出，不把它们收成一个「标准官方拼法」。",
          source: "deck"
        },
        {
          type: "details",
          summary: { en: "A short list of confirmed awards and press I may mention", zh: "我可能会提到的、已确认的奖项与报道，简要列出" },
          blocks: [
            {
              type: "paras",
              items: [
                {
                  en: "I won’t read a long honours list in the live talk. The facts below are only those already in the Zcool talk, my interview, or the confirmed notes on my official site’s SOURCES.md (LinkedIn is treated there as the biographical source of record).",
                  zh: "直播里我不会把奖项从头念到尾。下面只列出已经出现在站酷讲稿、访谈，或官网 SOURCES.md 确认记录里的事实（那里把 LinkedIn 作为履历的权威来源）。",
                  source: "sources"
                },
                {
                  en: "The Court — global championship, Stability AI #DiffuseTogether, 2023. Silver at the second Runway International AI Film Festival. Work shown at the Tribeca Film Festival, and collaborations with Google, OpenAI and ByteDance. Dear “Stranger” premiered on Google Flow TV at Google I/O 2025. Forbes published a profile in September 2026: “How AI And Peter Gabriel Changed Junie Lau’s Path To Directing.”",
                  zh: "《The Court》——2023 年 Stability AI #DiffuseTogether 全球冠军。第二届 Runway 国际 AI 电影节银奖。作品在 Tribeca Film Festival 展映，并与 Google、OpenAI、ByteDance 合作。《Dear “Stranger”》作为 Google Flow TV 影片在 2025 年 Google I/O 上线。Forbes 于 2026 年 9 月刊出人物专访：《How AI And Peter Gabriel Changed Junie Lau’s Path To Directing》。",
                  source: "sources"
                }
              ]
            },
            {
              type: "links",
              items: [
                {
                  href: "https://www.forbes.com/sites/maureenkerr/2026/09/04/how-ai-and-peter-gabriel-changed-junie-laus-path-to-directing/",
                  kindEn: "Press",
                  kindZh: "报道",
                  labelEn: "Forbes profile, September 2026",
                  labelZh: "《福布斯》专访，2026年9月",
                  noteEn: "Opens in a new tab.",
                  noteZh: "将在新标签页打开。"
                },
                {
                  href: "https://linkedin.com/in/junielau",
                  kindEn: "Biography",
                  kindZh: "履历",
                  labelEn: "LinkedIn",
                  labelZh: "LinkedIn",
                  noteEn: "The biographical source of record used on my official site.",
                  noteZh: "官网资料所依据的履历来源。"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "story",
      num: "02",
      titleEn: "The story behind Goldfish Mayhem",
      titleZh: "《金魚街大亂鬥》背后的故事",
      navEn: "The story",
      navZh: "故事",
      ghost: "金魚街",
      blocks: [
        {
          type: "lede",
          en: "Goldfish Mayhem is a cyber-folk action comedy. The story is set in 2035, on a noisy, chaotic future Goldfish Street. People there work frantically and modify their bodies, hoping one day to reach the Cloud world high above. Our three leads are three girls who keep getting into trouble. To rescue their foster mother, 芬姨, who is about to be sacrificed, they break into that Cloud world — and find a secret experiment about data immortality.",
          zh: "今天想跟大家分享一下《金魚街大亂鬥》。它是一部赛博民俗动作喜剧，故事发生在 2035 年一条热闹又混乱的未来金鱼街。街坊们拼命赚钱、改造身体，都希望有一天能去到高高在上的「云端」世界。但我们的三个主角，是三个爱闯祸的女孩。她们为了救回即将被献祭的养母芬姨，闯进云端世界，结果发现了一个关于数据永生的秘密实验。",
          source: "zcool"
        },
        {
          type: "videos",
          items: [
            {
              id: "8R4hEVX46fA",
              poster: "assets/yt-8R4hEVX46fA.jpg",
              titleEn: "Goldfish Mayhem | Official Film | Beyond the Loop S2",
              titleZh: "《金魚街大亂鬥》官方影片 ｜ Beyond the Loop 第二季",
              source: "yt"
            },
            {
              id: "N3ZfYhO8cBY",
              poster: "assets/yt-N3ZfYhO8cBY.jpg",
              titleEn: "Goldfish Mayhem | Official Trailer | Beyond the Loop S2",
              titleZh: "《金魚街大亂鬥》官方预告 ｜ Beyond the Loop 第二季",
              source: "yt"
            }
          ]
        },
        {
          type: "callout",
          kind: "conflict",
          en: "Two public introductions sit side by side here; I am not merging them into one invented sentence. On the Zcool stage I called it a cyber-folk action comedy set in 2035, about three troublemaking girls rescuing their foster mother 芬姨 from being sacrificed, entering the Cloud, and discovering a secret experiment about data immortality. My official site’s one-liner is: “Cantonese cyberpunk world of kung fu and robo-cops: three sisters save their aunt from cyber elites.” / 「粤式赛博朋克世界，功夫与机械警察：三姐妹从赛博精英手中救出姑妈。」 The site also lists Year 2026 and my role as Director — that is the work year of the film, not necessarily the story year. The story year I used in the talk is 2035.",
          zh: "这里并列两则已经公开的介绍，我不会把它们合成一句新的故事。站酷台上，我把它说成一部发生在 2035 年的赛博民俗动作喜剧：三个爱闯祸的女孩，为了救回即将被献祭的养母芬姨，闯进云端，发现了关于数据永生的秘密实验。官网的一句话是：「粤式赛博朋克世界，功夫与机械警察：三姐妹从赛博精英手中救出姑妈。」官网同时标注年份 2026、职务为导演——那是作品年份，不一定是故事发生的年份。讲稿里我使用的故事年份是 2035。",
          source: "site"
        },
        {
          type: "images",
          cols: 2,
          items: [
            {
              src: "assets/deck/street-banner.jpg",
              altEn: "Crowded Goldfish Street under a festival banner",
              altZh: "横幅下热闹的金鱼街",
              capEn: "A Goldfish Street image from the talk deck.",
              capZh: "站酷PPT中的金鱼街画面。",
              source: "deck"
            },
            {
              src: "assets/stills/goldfish-3.jpg",
              altEn: "Three girls gathered around a glowing device in a garden courtyard",
              altZh: "三个女孩在庭院里围着一台发光的装置",
              capEn: "An official still: three girls around a glowing device.",
              capZh: "官方剧照：三个女孩围在一台发光的装置旁。",
              source: "stills"
            }
          ]
        },
        {
          type: "paras",
          items: [
            {
              en: "It sounds like science fiction, but it starts in my childhood. Goldfish Mayhem is actually the first short film I have made that truly comes from my hometown. I am from Foshan, Guangdong, a small city very close to Hong Kong. At the age of eight I went with my mother to 鸿胜武馆, and saw people practise kung fu at close range for the first time. Downstairs from my childhood home there really was a street called Goldfish Street. And I grew up watching a great many Hong Kong films, especially Stephen Chow’s comedies.",
              zh: "听上去很科幻，但它的起点其实是我的童年。《金魚街大亂鬥》其实是我第一部真正从自己家乡出发创作的短片。我来自广东佛山，一个离香港很近的小城市。八岁时我跟妈妈去过鸿胜武馆，第一次近距离看人练功夫。我小时候家楼下也真的有一条金鱼街。再加上我从小看了很多香港电影，特别喜欢周星驰的喜剧。",
              source: "zcool"
            },
            {
              en: "Guangdong is quite different from many other parts of China. We grew up speaking Cantonese, not Mandarin, as our main language. Because Foshan is close to Hong Kong, and because part of my family is from Hong Kong, the culture I grew up with was mixed: Guangdong culture, Hong Kong culture, British influence, Japanese pop culture, and different parts of Chinese culture. I think that mixture slowly shaped my visual style, and made me want to invent a visual language rather than only follow existing ones.",
              zh: "广东和中国很多其他地方不太一样。我们从小主要讲粤语，而不是普通话。因为佛山离香港很近，再加上我家里也有一部分家人是香港人，所以我成长中接触到的文化其实是混合的：广东文化、香港文化、英国文化影响、日本流行文化，以及中国不同地区的文化影响。我觉得这种混合感慢慢形成了我现在的视觉风格，也让我一直想创造一种新的视觉语言，而不是只去沿用已经存在的视觉体系。",
              source: "interview"
            },
            {
              en: "So I took Foshan, Hong Kong, Lingnan culture, and all those messy childhood memories, enlarged them, distorted them, put them back together, and added a few questions I have about the future. That is how today’s Goldfish Street arrived. The Goldfish Street in the film is fictional, but it is inspired by the real street downstairs from my home. That street was also called Goldfish Street, though it was not really selling goldfish — it had wallpaper shops, hardware stores, restaurants, and everyday neighbourhood life. There is also a Goldfish Street near Mong Kok in Hong Kong. So for me it is not one specific street. It is a collection of memories from Guangdong, Hong Kong, and my childhood.",
              zh: "所以我把佛山、香港、岭南文化，还有小时候那些乱七八糟的记忆混在一起，放大、变形、重组，再加上一点我对未来的想象和提问，才有了今天这个金鱼街的世界。电影里的金鱼街是虚构的，但它的灵感来自我家楼下真实存在的一条街。那条街也叫金鱼街，但它并不是卖金鱼的，而是有很多墙纸店、五金店、餐饮店，还有很日常的街坊生活。同时，香港旺角附近也有一条金鱼街。所以对我来说，金鱼街不是某一条具体的街，而更像是一种关于广东、香港和童年记忆的集合。",
              source: "interview"
            }
          ]
        },
        {
          type: "images",
          cols: 2,
          items: [
            {
              src: "assets/deck/foshan-lion.jpg",
              altEn: "A lion-dance head in front of a building inscribed 佛山鸿胜纪念",
              altZh: "佛山鸿胜纪念建筑前的醒狮",
              capEn: "A lion dance photographed in front of 佛山鸿胜 — from the Zcool deck, beside the line about taking Chinese culture as a root.",
              capZh: "站酷PPT中，佛山鸿胜纪念建筑前的醒狮，和「以中国文化为根」放在一起。",
              source: "deck"
            },
            {
              src: "assets/stills/goldfish-6.jpg",
              altEn: "A girl mid-kick beside a lion-headed food cart on a wet street",
              altZh: "湿漉漉的街道上，一个女孩在狮头餐车旁踢腿",
              capEn: "An official still: a kick beside a lion-headed cart on the street.",
              capZh: "官方剧照：街道上，狮头餐车旁的一记踢腿。",
              source: "stills"
            }
          ]
        },
        {
          type: "para",
          en: "Many places in the film come from real life: the fish-ball stand, the feng shui stall, the paper-offering shop, the dessert shop, the wishing tree, dai pai dong and other street stalls, lion dance, martial arts, and neighbourhood life. I enlarged and transformed them into a more fantastic cyber world, but their emotional roots all come from things I saw and felt while growing up. After seeing more of the world, I started to look back at that small community. Today that kind of Hong Kong comedy appears less often, and some local Cantonese cultures seem to be known by fewer people. As a filmmaker, I feel a responsibility to show and reimagine the world that exists in my memory.",
          zh: "片子里的很多地方都来自现实生活，比如鱼蛋档、风水摊、纸扎店、糖水铺、许愿树、大排档和街头摊档，还有醒狮、武术和街坊生活。我把它们放大、变形，变成一个更奇幻、更赛博的世界，但它们最开始的情感来源，都是我成长过程中见过、感受过的东西。也正是因为接触到了更大的世界，我反而开始回看自己成长里的那个小社区。现在，那种香港喜剧已经不像以前那么频繁地出现了，很多粤语地区的本土文化，也好像慢慢被更少的人知道。作为一个 filmmaker，我可以用影像，把我记忆中的那个世界重新呈现出来、重新想象出来。",
          source: "interview"
        },
        {
          type: "para",
          en: "The upper world, the Cloud, was inspired by a rotating restaurant I visited with my parents when I was very young. It was expensive, and I could only go if I worked hard and got good grades. In my memory it stood for a higher place — upper, costly, and difficult to reach. In the film, Goldfish Street and the Cloud became two opposite worlds: one grounded, chaotic, emotional, and full of human connection; the other high above, cold, controlled, and defined by success and upgrading.",
          zh: "而片子里上方的云端，灵感来自我小时候和父母去过的一家旋转餐厅。那是一个比较贵的地方，小时候我只有很努力、拿到好成绩，才有机会去那里。所以在我的记忆里，它代表着一个「更高的地方」——一个更上层、更昂贵、也更难抵达的空间。金鱼街和云端就变成了两个相反的世界：一个是落地的、混乱的、充满情感和人情味的；另一个是高高在上的、冰冷的、被成功和升级定义的。",
          source: "interview"
        },
        {
          type: "images",
          cols: 2,
          items: [
            {
              src: "assets/stills/goldfish-1.jpg",
              altEn: "A richly dressed group seated in a red velvet salon, with a street visible through the window",
              altZh: "一群盛装的人坐在红色丝绒的厅里，窗外是街道",
              capEn: "An official still from a luxurious interior.",
              capZh: "官方剧照：一处华丽的室内。",
              source: "stills"
            },
            {
              src: "assets/stills/goldfish-8.jpg",
              altEn: "A vast gilded hall with a towering golden figure under a red sky",
              altZh: "一座巨大的金色殿堂，红天下有一座金色巨像",
              capEn: "An official still from a gilded, elevated space.",
              capZh: "官方剧照：一处金碧辉煌、高高在上的空间。",
              source: "stills"
            }
          ]
        },
        {
          type: "para",
          en: "I also wanted to use the film to think about something very real. In Asia, people are often under great pressure to compete — to become stronger, richer, more successful, more visible. We keep trying to move upward. But what are we really chasing? If one day we reach that higher place, will we still keep our original heart, our sense of right and wrong, and our ability to love? I don’t want the film to feel too heavy, though. I hope you can simply enjoy Goldfish Street as a funny, chaotic, strange, and warm world full of love.",
          zh: "我也想通过这部片去思考一些很现实的问题。在亚洲，大家常常处在一种很「卷」的状态里，每个人都想变得更强、更有钱、更成功，也更被看见。我们不断往上爬。但我有时候会想：我们到底在追求什么？如果有一天我们真的到达了那个更高的地方，我们还会不会保留原来的心，还会不会保有责任、良心和爱人的能力？但同时，我并不希望这部片让观众觉得太沉重。我希望大家可以单纯地享受金鱼街这个世界。它是好笑的、混乱的、奇怪的，但也是温暖的、充满爱的。",
          source: "interview"
        },
        {
          type: "para",
          en: "There are three girls in the film. They are more like three different mirrors, each reflecting a different part of who I am, rather than any one of them standing in for me completely.",
          zh: "片子里有三个主要女孩。我不会说哪一个角色完全代表我。她们更像是三面不同的镜子，分别折射出我性格里的不同部分。",
          source: "interview"
        },
        {
          type: "names",
          items: [
            {
              titleEn: "BOBO",
              titleZh: "BOBO",
              variantsEn: "Published form: BOBO (talk deck, interview, Instagram).",
              variantsZh: "已公开的写法：BOBO（站酷PPT、访谈、Instagram）。",
              en: "BOBO carries my angry and rebellious side, and the part of me that wants to protect the people around me.",
              zh: "BOBO 有我暴躁、叛逆，也想保护身边人的一面。",
              source: "interview"
            },
            {
              titleEn: "风水妹 / Fengshui Girl",
              titleZh: "风水妹",
              variantsEn: "Talk deck and Xiaohongshu: 风水妹. Interview: Fengshui Girl. Instagram: FENG SHUI GIRL. These are published variants, not one official standard.",
              variantsZh: "站酷PPT和小红书：风水妹。访谈英文：Fengshui Girl。Instagram：FENG SHUI GIRL。这些都是已公开的不同写法，我不会把它们收成一个标准官方名。",
              en: "She carries the part of me that has to perform in social situations, and sometimes wear another face.",
              zh: "风水妹有我在社交场合里需要表演、需要戴上另一种面具的一面。",
              source: "interview"
            },
            {
              titleEn: "细细粒 / Xixili",
              titleZh: "细细粒",
              variantsEn: "Talk deck and Xiaohongshu: 细细粒. Interview: Xixili. Instagram: LITTLE ONE. Again, published variants only.",
              variantsZh: "站酷PPT和小红书：细细粒。访谈英文：Xixili。Instagram：LITTLE ONE。同样只并列已公开的写法。",
              en: "She carries my curiosity about new technology, strange inventions, different dimensions, and the unknown.",
              zh: "细细粒则有我对新科技、奇怪发明、多维度世界和未知事物的好奇心。",
              source: "interview"
            }
          ]
        },
        {
          type: "callout",
          kind: "editorial",
          en: "On Xiaohongshu, in a public reply on episode two, I already mixed the forms 「BOBO、风水妹、细细粒」. The official site describes “three sisters” saving their “aunt”; in the talk and the interview I call 芬姨 our foster mother (养母). I am leaving those public wordings as they are.",
          zh: "我在小红书第二集的公开回复里，已经混用过「BOBO、风水妹、细细粒」这种写法。官网说的是「三姐妹」救出「姑妈」；在讲稿和访谈里，我称芬姨为养母。这些已经公开的用词，我都保留原样。",
          source: "xhs"
        },
        {
          type: "details",
          summary: { en: "What the film is asking — themes I have already spoken about", zh: "这部影片在问什么——我已经公开谈过的主题" },
          blocks: [
            {
              type: "paras",
              items: [
                {
                  en: "The film explores what we might lose when the world keeps chasing technology, success, and the possibility of living forever through data. If one day we can upload the human brain to the cloud, can we really keep all of a person’s memories — those tiny feelings, repeated emotions, untold secrets, love and hate? At what point can this “data soul” still be considered “me”? If we could live forever, but lost our bodies, memories, feelings, and the people who love us, would that really be a better future?",
                  zh: "这部影片探讨的是：当世界不断追求科技、成功，以及通过科技永远活下去的可能性时，我们可能会失去什么。如果有一天，我们可以把人脑上传到云端，那我们真的能保留一个人的全部记忆吗？那些细微的感受、反复出现的情绪、从未说出口的秘密、爱与恨，真的都能被完整保存吗？到什么程度，这份「数据灵魂」还可以被称为「我」？如果我们可以永远活下去，但却失去了身体、记忆、感受，以及那些爱我们的人，那这真的是一个更好的未来吗？",
                  source: "interview"
                },
                {
                  en: "Through the contrast between the Cloud and Goldfish Street, I also wanted to ask whether new waves of technology, politics and economics are slowly separating people into different classes — and who will be defined as the new human. At the same time, through this community and the three girls, the film explores friendship, family, memory and belonging. Goldfish Street feels chaotic and absurd because memory itself is like a dream — blurry, unstable, not always reliable. But it is also warm and alive, because the emotional connection between people is real. Everyone has their own Goldfish Street. As long as you believe in it, that universe will continue to exist, and it belongs to you.",
                  zh: "通过云端和金鱼街的对照，我也想问：新的科技、政治和经济浪潮，是否正在慢慢把人类分成不同的阶层？谁又会被定义为新的人类？同时，通过这个社区和三个女孩的故事，影片也探讨了友情、家人、记忆和归属感。金鱼街显得混乱、荒诞，是因为记忆本来就像梦一样模糊、不稳定，也不完全可靠。但它也是温暖的、鲜活的，因为人与人之间的情感连接是真实存在的。每个人都有自己的金鱼街。只要你相信它，那个宇宙就会继续存在，而且它只属于你。",
                  source: "interview"
                },
                {
                  en: "Another reason I wanted to make this film is that I wanted to shoot the kind of women’s stories I longed to watch as a child. Growing up with kung fu films, I always wondered: why couldn’t the lead be a girl? Girls can be the superheroes who save the world as well. AI has given me a freedom I did not have when budget and scale stood in the way, so I can finally try to put the place I grew up, the culture I love, and a female filmmaker’s point of view into a film world.",
                  zh: "还有一个很重要的原因，是我想拍一些自己小时候特别想看的女性故事。从小看功夫片，我就总在想：为什么主角不能是女孩子？她们也可以是拯救世界的超级英雄。以前很多画面，我受限于预算和制作规模，没有机会真正做出来。现在 AI 给了我过去没有的自由，让我终于可以试着把自己成长的地方、喜欢的文化，以及作为女性创作者的视角放到电影世界里。",
                  source: "zcool"
                }
              ]
            }
          ]
        },
        {
          type: "para",
          en: "This September we held a small invitation-only screening in Los Angeles. The film company invited friends from the local industry, including people from Disney, Netflix, A24 and Fox Animation. It was the first time I sat in a room like that and watched my own work with people from those companies. Afterwards, some of the audience said they had never seen a world like this before. I was happy, because a strange imagination I had kept since childhood had really been seen by someone else. And after finishing the film I also began to ask: once the technology grows stronger and stronger, what stories do I actually want to tell? I think the special thing in a work is its authorship — the filmmaker’s own experience, taste, feeling, and what they truly want to express or criticise.",
          zh: "今年九月，我们在洛杉矶办了一场小型邀请制放映。电影公司邀请了一些当地影视行业的朋友，有来自迪士尼、Netflix、A24、福克斯动画等公司的从业者。那是我第一次坐在这样的放映现场，跟来自不同顶级电影公司的从业者一起看自己的作品。放映结束以后，有观众说，他们以前没有见过这样的世界。我听到的时候很开心，因为一个小时候藏在脑子里的奇怪想象，真的被别人看见了。但做完这部电影，我也开始思考：技术越来越强之后，我究竟想讲什么故事？我觉得，是它的作者性。创作者自己的经历、审美、情感，还有他真正想表达和批判的东西。",
          source: "zcool"
        },
        {
          type: "links",
          items: [
            {
              href: "https://www.xiaohongshu.com/explore/6aedce5000000000090116f9",
              kindEn: "Xiaohongshu",
              kindZh: "小红书",
              labelEn: "Episode 1 ｜ Prologue",
              labelZh: "第一集｜序",
              noteEn: "Public entry. Opens in a new tab.",
              noteZh: "已公开的条目，将在新标签页打开。"
            },
            {
              href: "https://www.xiaohongshu.com/explore/6af1b6610000000033021bb4",
              kindEn: "Xiaohongshu",
              kindZh: "小红书",
              labelEn: "Episode 2 ｜ One (three little tyrants)",
              labelZh: "第二集｜壹（三位小霸王）",
              noteEn: "Public entry. Opens in a new tab.",
              noteZh: "已公开的条目，将在新标签页打开。"
            },
            {
              href: "https://www.xiaohongshu.com/explore/6af431e500000000230134f4",
              kindEn: "Xiaohongshu",
              kindZh: "小红书",
              labelEn: "Behind-the-scenes special",
              labelZh: "幕后制作特辑",
              noteEn: "Public entry. Opens in a new tab.",
              noteZh: "已公开的条目，将在新标签页打开。"
            },
            {
              href: "https://www.instagram.com/junielaux/reel/Dd876e-hI6l/",
              kindEn: "Instagram",
              kindZh: "Instagram",
              labelEn: "Goldfish Street: BOBO",
              labelZh: "金鱼街：BOBO",
              noteEn: "Character reel, 2026.10.01.",
              noteZh: "角色短视频，2026.10.01。"
            },
            {
              href: "https://www.instagram.com/junielaux/reel/Dd5_GT6B8f-/",
              kindEn: "Instagram",
              kindZh: "Instagram",
              labelEn: "Goldfish Street: FENG SHUI GIRL",
              labelZh: "金鱼街：FENG SHUI GIRL",
              noteEn: "Character reel, 2026.09.30.",
              noteZh: "角色短视频，2026.09.30。"
            },
            {
              href: "https://www.instagram.com/junielaux/reel/Dd3bIc3uqDZ/",
              kindEn: "Instagram",
              kindZh: "Instagram",
              labelEn: "Goldfish Street: LITTLE ONE",
              labelZh: "金鱼街：LITTLE ONE",
              noteEn: "Character reel, 2026.09.29.",
              noteZh: "角色短视频，2026.09.29。"
            },
            {
              href: "https://www.instagram.com/wearewonderstudios/reel/DeJsNDlImjg/",
              kindEn: "Instagram",
              kindZh: "Instagram",
              labelEn: "Wonder Studios collaboration reel",
              labelZh: "与 Wonder Studios 的合作短视频",
              noteEn: "Posted 2026.10.06. The Zcool deck also writes 金魚街大亂鬥 × WONDERSTUDIOS.",
              noteZh: "发布于 2026.10.06。站酷PPT中也写有「金魚街大亂鬥 × WONDERSTUDIOS」。"
            }
          ]
        }
      ]
    },
    {
      id: "process",
      num: "03",
      titleEn: "From moodboard to screen",
      titleZh: "从情绪板到银幕",
      navEn: "From moodboard to screen",
      navZh: "从情绪板到银幕",
      ghost: "创造",
      blocks: [
        {
          type: "lede",
          en: "I can walk through this film in the order I actually use when I talk about making it: moodboards, world-building, character design, set design, then video generation. Some of the boards live on outside links — I will open them in a new tab rather than try to embed a login wall. The tools I describe here are the ones I have already talked about in an interview for this film.",
          zh: "我可以按照自己讲述这部片子时的顺序，走一遍制作过程：情绪板、世界观、角色设计、场景设计，然后才到视频生成。有些参考板放在外部链接里——我会在新标签页打开，而不是把需要登录的页面嵌进来。这里提到的工具，都是我已经在访谈里，针对这部影片谈过的。",
          source: "interview"
        },
        {
          type: "steps",
          items: [
            {
              id: "moodboards",
              titleEn: "Moodboards",
              titleZh: "情绪板",
              blocks: [
                {
                  type: "para",
                  en: "The first thing I need is a place to hold the feeling of the world — colour, street life, the clash between something very local and something already speeding toward the future. The final moodboard I can share today is this Miro board.",
                  zh: "首先我需要一个地方，把这个世界的感觉放下——颜色、市井生活，以及非常本地的事物和已经冲向未来的事物怎样撞在一起。今天我可以分享的最终情绪板，是这块 Miro 看板。",
                  source: "interview"
                },
                {
                  type: "links",
                  items: [
                    {
                      href: "https://miro.com/app/board/uXjVGg8zP5k=/?share_link_id=713540723386",
                      kindEn: "Miro — official link",
                      kindZh: "Miro — 正式链接",
                      labelEn: "Final moodboard",
                      labelZh: "最终情绪板",
                      noteEn: "Opens in a new tab. I am not embedding the board here.",
                      noteZh: "将在新标签页打开。这里不嵌入看板。"
                    }
                  ]
                },
                {
                  type: "images",
                  cols: 3,
                  items: [
                    {
                      src: "assets/stills/goldfish-2.jpg",
                      altEn: "Four dancers with feather fans around a giant cocktail glass",
                      altZh: "四名拿着羽扇的舞者围绕着一只巨大的鸡尾酒杯",
                      capEn: "Official still — a richly coloured interior.",
                      capZh: "官方剧照——色彩浓烈的室内。",
                      source: "stills"
                    },
                    {
                      src: "assets/stills/goldfish-7.jpg",
                      altEn: "An extreme close-up of a mechanical eye with a glowing green ring",
                      altZh: "一只带有绿色光环的机械眼睛特写",
                      capEn: "Official still — a mechanical close-up.",
                      capZh: "官方剧照——机械细节的特写。",
                      source: "stills"
                    },
                    {
                      src: "assets/stills/goldfish-8.jpg",
                      altEn: "A gilded ceremonial hall",
                      altZh: "一座金色的礼仪殿堂",
                      capEn: "Official still — an elevated hall.",
                      capZh: "官方剧照——一处高高在上的殿堂。",
                      source: "stills"
                    }
                  ]
                },
                {
                  type: "callout",
                  kind: "gap",
                  en: "I have not placed screenshots of the Miro board on this page. If we want a few still frames from the board itself for a later version, they will need to be exported on purpose.",
                  zh: "这个页面上没有放 Miro 看板的截图。如果以后版本需要从看板里导出几张静帧，需要另外专门导出。"
                }
              ]
            },
            {
              id: "worldbuilding",
              titleEn: "World-building",
              titleZh: "世界观构建",
              blocks: [
                {
                  type: "para",
                  en: "I wanted to try placing the things I know — lion dance, kung fu, paper offerings, sweet-soup shops, hawkers, feng shui stalls, and that close, slightly noisy way neighbours live in Guangdong — into a future street. What happens when a lion dance has a mechanical body, or when a Cantonese old street starts to take up cyber prosthetics and memory upload? The Cloud above that street, as I have said, grew out of a rotating restaurant I could only visit if I did well enough at school: a “higher place.”",
                  zh: "我想试试看，能不能把这些我熟悉的东西放进一个未来世界：醒狮、功夫、纸扎、糖水铺、街头小贩、风水摊，还有广东街坊之间那种很亲近、又有点吵吵闹闹的关系。比如醒狮有了机械身体，一条广东老街开始流行赛博义肢和记忆上传，会发生什么事情？而那条街上方的云端，如我所说，来自我小时候只有考好了才有机会去的旋转餐厅：一个「更高的地方」。",
                  source: "zcool"
                },
                {
                  type: "images",
                  cols: 2,
                  items: [
                    {
                      src: "assets/deck/street-banner.jpg",
                      altEn: "The crowded street of the film world",
                      altZh: "影片世界里热闹的街道",
                      capEn: "Street-level Goldfish Street, from the talk deck.",
                      capZh: "站酷PPT中，落在地面上的金鱼街。",
                      source: "deck"
                    },
                    {
                      src: "assets/stills/goldfish-8.jpg",
                      altEn: "A gilded hall under a red sky",
                      altZh: "红天下的金色殿堂",
                      capEn: "An official still from a very different, elevated space.",
                      capZh: "官方剧照：另一处完全不同的、高处的空间。",
                      source: "stills"
                    }
                  ]
                },
                {
                  type: "links",
                  items: [
                    {
                      href: "https://app.lumalabs.ai/board/c8442ab4-5e14-4bb3-a93d-fdcb806d5c1a",
                      kindEn: "Luma — official board",
                      kindZh: "Luma — 正式看板",
                      labelEn: "World building and Character design",
                      labelZh: "世界观与角色设计",
                      noteEn: "The official board I am using for these two steps. Opens in a new tab. I am not logging in or embedding it here.",
                      noteZh: "这两步我指定使用的正式看板。将在新标签页打开。这里不登录，也不嵌入。"
                    },
                    {
                      href: "https://www.figma.com/board/VrMF8IULPUp7JQ9RESBTzx/GOLDFISH-MAYHEM?node-id=0-1&t=ZSduhjK4uau2P4OO-1",
                      kindEn: "Figma — additional reference",
                      kindZh: "Figma — 补充参考",
                      labelEn: "Character and environment references",
                      labelZh: "角色与场景参考",
                      noteEn: "An additional reference board. Opens in a new tab.",
                      noteZh: "补充参考看板。将在新标签页打开。"
                    },
                    {
                      href: "https://docs.google.com/document/d/1VcMepSYRJIBV8J73Q2OGmHHfble0TXMi_-3V2NyDFGQ/edit?usp=sharing",
                      kindEn: "Google Doc — official link",
                      kindZh: "Google 文档 — 正式链接",
                      labelEn: "Project document",
                      labelZh: "项目文档",
                      noteEn: "A production-reference link only. I am not quoting extra unpublished plot from it on this public page.",
                      noteZh: "仅作为制作参考链接。这个公开页面不会从中摘录尚未公开的情节。"
                    }
                  ]
                }
              ]
            },
            {
              id: "characters",
              titleEn: "Character design",
              titleZh: "角色设计",
              blocks: [
                {
                  type: "para",
                  en: "The three girls are not perfect heroines. They can be impulsive, rebellious, and make a mess — and I like that. As I said earlier, they are also three mirrors of myself: BOBO, 风水妹 / Fengshui Girl, and 细细粒 / Xixili. The official board I am using for world-building and character design is the Luma board below. The Instagram reels in the previous chapter are the character introductions already published.",
                  zh: "这三个女孩不是完美的女英雄。她们可能冲动、叛逆，把事情搞得一团糟——我反而喜欢这样。如我前面所说，她们也是我的三面镜子：BOBO、风水妹 / Fengshui Girl，以及细细粒 / Xixili。世界观与角色设计，我指定使用的正式看板是下面这块 Luma 看板。上一章里的 Instagram 短视频，则是已经公开的角色介绍。",
                  source: "interview"
                },
                {
                  type: "links",
                  items: [
                    {
                      href: "https://app.lumalabs.ai/board/c8442ab4-5e14-4bb3-a93d-fdcb806d5c1a",
                      kindEn: "Luma — official board",
                      kindZh: "Luma — 正式看板",
                      labelEn: "World building and Character design",
                      labelZh: "世界观与角色设计",
                      noteEn: "The official board I am using for these two steps. Opens in a new tab.",
                      noteZh: "这两步我指定使用的正式看板。将在新标签页打开。"
                    },
                    {
                      href: "https://www.figma.com/board/VrMF8IULPUp7JQ9RESBTzx/GOLDFISH-MAYHEM?node-id=0-1&t=ZSduhjK4uau2P4OO-1",
                      kindEn: "Figma — additional reference",
                      kindZh: "Figma — 补充参考",
                      labelEn: "Character and environment references",
                      labelZh: "角色与场景参考",
                      noteEn: "An additional reference board. Opens in a new tab.",
                      noteZh: "补充参考看板。将在新标签页打开。"
                    }
                  ]
                },
                {
                  type: "images",
                  cols: 3,
                  items: [
                    {
                      src: "assets/deck/character-poster.jpg",
                      altEn: "Key art of the three girls",
                      altZh: "三位女孩的主视觉",
                      capEn: "Key art of the three girls, from the Zcool deck.",
                      capZh: "站酷PPT中三位女孩的主视觉。",
                      source: "deck",
                      contain: true,
                      natural: true
                    },
                    {
                      src: "assets/stills/goldfish-3.jpg",
                      altEn: "Three girls around a glowing device",
                      altZh: "三个女孩围在发光装置旁",
                      capEn: "Official still — the three of them together.",
                      capZh: "官方剧照——三个人在一起。",
                      source: "stills"
                    },
                    {
                      src: "assets/stills/goldfish-4.jpg",
                      altEn: "A girl with mechanical finger-barrels reaching toward the camera",
                      altZh: "一个手指是机械管的女孩伸向镜头",
                      capEn: "Official still — a close-up of one of the girls.",
                      capZh: "官方剧照——其中一个女孩的特写。",
                      source: "stills"
                    }
                  ]
                }
              ]
            },
            {
              id: "sets",
              titleEn: "Set design",
              titleZh: "场景设计",
              blocks: [
                {
                  type: "para",
                  en: "Because I spent years as an art director, I care a great deal about whether a place feels lived in. Goldfish Street had to carry street life, Lingnan culture, and the story at the same time: a fish-ball stand, a feng shui stall, a paper-offering shop, a dessert shop, a wishing tree, dai pai dong. The Luma board above is the official world-building and character-design board I can point to today; the Figma board remains as an additional environment reference.",
                  zh: "因为我做过很多年美术指导，我很在意一个地方看起来是否像有人真正生活过。金鱼街需要同时装下市井生活、岭南文化和故事本身：鱼蛋档、风水摊、纸扎店、糖水铺、许愿树、大排档。今天我能够指给大家看的正式世界观与角色设计看板，是上面的 Luma 看板；Figma 看板仍可作为补充的场景参考。",
                  source: "interview"
                },
                {
                  type: "images",
                  cols: 2,
                  items: [
                    {
                      src: "assets/stills/goldfish-1.jpg",
                      altEn: "A salon interior with a street outside the window",
                      altZh: "窗外是街道的厅堂室内",
                      capEn: "Official still — an interior, with the street still visible outside.",
                      capZh: "官方剧照——室内，窗外仍能看见街道。",
                      source: "stills"
                    },
                    {
                      src: "assets/stills/goldfish-6.jpg",
                      altEn: "A wet street with a lion-headed cart and a red plastic stool",
                      altZh: "潮湿的街道、狮头餐车和一只红色塑料凳",
                      capEn: "Official still — street level, with very ordinary objects in a not-so-ordinary world.",
                      capZh: "官方剧照——街道层面，一个不那么普通的世界里，仍有非常普通的物件。",
                      source: "stills"
                    }
                  ]
                },
                {
                  type: "callout",
                  kind: "gap",
                  en: "I have not yet added a set-by-set note — which locations were designed first, which details were kept or invented — beyond what I have already said about real-life roots and the stills above.",
                  zh: "除了前面已经说过的现实来源，以及这些剧照，我还没有补上一份按场景拆开的说明：哪些地方先被设计出来，哪些细节是保留的，哪些是想象的。"
                }
              ]
            },
            {
              id: "video-gen",
              titleEn: "Video generation",
              titleZh: "视频生成",
              blocks: [
                {
                  type: "para",
                  en: "AI entered my process very early, but not first as a render button. I talk to ChatGPT almost every day, so when I have an idea I usually describe it at once — the world, the characters, the visual mood, and the story behind it. For me, AI is a creative partner. The original idea, emotion and point of view still come from me. On this film I also worked with a human screenwriter, Mr. Duan, so the story itself still came from human filmmakers. AI did not replace the storytelling. It helped me expand ideas, think through details, test directions, and turn blurry images in my mind into something more concrete and visual.",
                  zh: "AI 很早就进入了我的创作过程，但不是先作为一个「生成按钮」。我几乎每天都会和 ChatGPT 沟通，所以当我有一个想法的时候，我通常会马上跟它描述：我想创造一个什么样的世界、什么样的人物、什么样的视觉氛围，以及这个故事背后的设定。对我来说，AI 更像是一个创意伙伴。最初的想法、情感和观点仍然来自我自己。这次影片我也和一位人类编剧段先生合作，所以故事本身仍然来自人类创作者。AI 并没有取代 storytelling，但它帮助我延展想法、思考细节、测试方向，并把脑海里模糊的画面变成更具体、更可视化的内容。",
                  source: "interview"
                },
                {
                  type: "para",
                  en: "invideo Agent One enters my workflow at the video-generation stage. I use it as a form of agentic video creation. Because I have quite high expectations for my characters and visual details, it usually cannot give me exactly what I want in one attempt. The process still needs many rounds of testing, changing and adjustment. I can communicate with it in natural language — upload the story, the script, character backgrounds and character designs — and it helps me organise that material into context. It feels more like working with a creative teammate than only using a tool. I usually let it make a first pass of the video, more like a visual rehearsal, so I can see the structure, the connection between scenes, and the general visual flow. After that I give it more specific direction and guide it closer to the cut I have in my head. I can also work with it in Mandarin, Cantonese and English.",
                  zh: "invideo Agent One 是在视频生成阶段进入我的工作流的。我把它用在 agentic video creation 这个环节。因为我对角色和视觉细节的要求比较高，所以它通常没有办法一次就生成我真正想要的结果。这个过程仍然需要很多迭代、测试和调整。我可以用自然语言和它沟通，比如上传故事、剧本、人物背景和角色设计，它会帮助我把这些内容整理成上下文。它给我的感觉更像是一个创意工作伙伴，而不只是一个工具。通常我会先让它帮我生成第一阶段的视频，这一版对我来说更像是一次视觉预演，让我很快看到故事结构、场景之间的连接，以及整体的画面流动。之后我会再给它更具体的指导，让它慢慢接近我脑海中的剪辑版本。我也可以用普通话、粤语和英文跟它沟通。",
                  source: "interview"
                },
                {
                  type: "para",
                  en: "This year I became very interested in an infinite canvas, because it can fix many problems in a filmmaking workflow. In the past we often had to organise everything into different folders — characters, scenes, references, generated clips. With CapCut Video Studio – Director Mode, the biggest advantage of the infinite canvas is that the whole thought process becomes visible. You can see how an idea develops from earlier stages, character settings and scene designs into the result you have now; and if you get stuck, you can trace it back. For me the canvas is not only for organising materials. It is a thinking space. I can upload the script, character background, and the character and scene images I have already made, describe their relationships in natural language, and it helps organise them into a video brief: theme, characters, timeline, story outline, and direction. The agent can also help organise materials, generate shots, and let me control scene creation through conversation.",
                  zh: "今年我对使用无限画布产生了很大的兴趣，因为它可以解决创作流程里的很多问题。过去我们经常需要把所有素材整理到不同的文件夹里，比如人物、场景、参考图、生成的视频片段。但在 CapCut Video Studio – Director Mode 的无限画布里，最大的好处是整个思考过程会变得更可视化。你可以很清楚地看到一个想法是如何从早期阶段、人物设定、场景设计，一步一步发展到现在这个结果的；如果在某个地方卡住了，也可以反过来追溯。对我来说，无限画布不只是一个整理素材的工具，它更像是一个帮助我思考的创作空间。我可以先上传剧本、人物背景，以及已经生成好的人物图和场景图，再用自然语言描述这些素材之间的关系，它就会帮助我整理出一个 video brief，里面包括主题、人物、时间线、故事 outline，以及创作方向。AI agent 也可以帮助整理素材、生成镜头，并让我通过对话来控制场景生成。",
                  source: "interview"
                },
                {
                  type: "para",
                  en: "OpenArt’s Smart Shot is useful because it helps me plan the scene before it is rendered — including the characters, the environment, the storyboard, camera angles and lighting. As a filmmaker I find it helpful because it lets me try different shots, expand the scene, and discover visual ideas I may not have thought of at the beginning. I also used OpenArt World Builder as part of this work.",
                  zh: "对我来说，OpenArt 的 Smart Shot 有用，是因为它帮助我在渲染之前先把场景计划好——包括人物、环境、分镜、机位和光线。作为 filmmaker，我觉得它很有帮助，因为它让我可以尝试不同镜头、把场景展开，并发现一些一开始未必想到的视觉想法。这次我也使用了 OpenArt World Builder。",
                  source: "interview"
                },
                {
                  type: "callout",
                  kind: "editorial",
                  en: "A language note I was given for talking about invideo Agent One, and which I am keeping here: the product name is written with a lowercase i, never “InVideo”; I describe it as agentic video creation, not “AI video generation”; I speak about it as a filmmaker and director, not as a solo, no-crew shortcut; and Agent One supports iteration — it does not skip it.",
                  zh: "关于 invideo Agent One，有几条我会保持的用语：产品名是小写 i 的 invideo，不写成 InVideo；我把它说成 agentic video creation，而不是「AI video generation」；我是从 filmmaker / 导演的角度来谈它，而不是强调单人、无团队或走捷径；Agent One 支持迭代，但并不会跳过迭代。",
                  source: "interview"
                },
                {
                  type: "videos",
                  items: [
                    {
                      id: "8R4hEVX46fA",
                      poster: "assets/yt-8R4hEVX46fA.jpg",
                      titleEn: "Official Film — click to play, no autoplay",
                      titleZh: "官方影片——点击后播放，不自动播放",
                      source: "yt"
                    },
                    {
                      id: "N3ZfYhO8cBY",
                      poster: "assets/yt-N3ZfYhO8cBY.jpg",
                      titleEn: "Official Trailer — click to play, no autoplay",
                      titleZh: "官方预告——点击后播放，不自动播放",
                      source: "yt"
                    },
                    {
                      id: "4nqVxmtilzA",
                      poster: "assets/yt-4nqVxmtilzA.jpg",
                      titleEn: "Behind the Scenes — click to play, no autoplay",
                      titleZh: "幕后花絮——点击后播放，不自动播放",
                      source: "yt"
                    }
                  ]
                },
                {
                  type: "callout",
                  kind: "gap",
                  en: "What I have not yet laid out shot by shot is a full production diary: which scene was rehearsed first in invideo Agent One, how a particular shot moved through CapCut’s canvas, or how OpenArt’s planning became a final frame. The official behind-the-scenes film is the public record I can play; a more detailed, confirmed breakdown can be added later if I write it.",
                  zh: "我还没有按镜头写出一份完整的制作日记：哪一场戏先在 invideo Agent One 里预演，某一个镜头怎样在 CapCut 的画布里推进，OpenArt 的计划又怎样变成最终画面。已经公开的幕后影片，是我现在可以播放的记录；如果以后我补写更细、也经过确认的拆解，可以再加进来。"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "kungfu",
      num: "04",
      titleEn: "A deeper dive into kung fu — and why hybrid AI",
      titleZh: "深入功夫动作，以及为什么选择混合式 AI 创作",
      navEn: "Kung fu and hybrid AI",
      navZh: "功夫与混合式 AI",
      ghost: "功夫",
      blocks: [
        {
          type: "lede",
          en: "I come from Foshan, one of the birthplaces of Chinese kung fu. When I was around eight years old, I went with my mother to 鸿胜武馆, and watched people train punch by punch, movement by movement. That experience planted a seed in me very early. Since I was young I knew that women could also be heroes, and could also be the main characters in stories about saving the world.",
          zh: "我来自佛山，那里是中国功夫的重要发源地之一。我大概八岁的时候，跟妈妈去过鸿胜武馆，看他们一拳一式地练习。那个经历很早就在我心里种下了一颗种子。也许从那个时候开始，我就知道女性也可以是英雄，也可以成为拯救世界故事里的主角。",
          source: "interview"
        },
        {
          type: "images",
          cols: 2,
          items: [
            {
              src: "assets/deck/foshan-lion.jpg",
              altEn: "A lion-dance performance in front of 佛山鸿胜",
              altZh: "佛山鸿胜前的醒狮",
              capEn: "Lion dance in front of 佛山鸿胜, from the Zcool deck.",
              capZh: "站酷PPT中，佛山鸿胜前的醒狮。",
              source: "deck"
            },
            {
              src: "assets/deck/kungfu-practice.jpg",
              altEn: "People practising martial movement in a traditional courtyard",
              altZh: "人们在传统庭院里练习武术动作",
              capEn: "Practice images shown in the same deck, beside the line about taking Chinese culture as a root.",
              capZh: "同一份PPT里，和「以中国文化为根」放在一起的习武画面。",
              source: "deck"
            }
          ]
        },
        {
          type: "paras",
          items: [
            {
              en: "Traditionally, many stories about kung fu, heroes and saving the world have been told from a male point of view. When I began using AI to make moving images, I felt a responsibility to talk about kung fu, the future, the idea of living forever through data, and ordinary street-level women trying to move upward — all from a female perspective.",
              zh: "但传统上，很多关于功夫、英雄和拯救世界的故事，都是从男性视角出发的。所以当我开始用 AI 创作动态影像时，我觉得自己有一种责任，去从女性视角讨论功夫、未来、通过数据实现永生的想法，以及那些在变化的世界里努力向上爬、充满市井气息的普通女性。",
              source: "interview"
            },
            {
              en: "In Goldfish Mayhem, kung fu is not a decoration I added afterwards. It belongs to the street I grew up with, together with lion dance and neighbourhood life, and it is also how I wanted girl heroes to exist in this world.",
              zh: "在《金魚街大亂鬥》里，功夫不是我事后加上的装饰。它属于我成长中的那条街，和醒狮、街坊生活在一起，也是我希望女性英雄能够存在于这个世界的方式。",
              source: "zcool"
            }
          ]
        },
        {
          type: "images",
          cols: 2,
          items: [
            {
              src: "assets/stills/goldfish-5.jpg",
              altEn: "A girl in a lion-dance headdress leaping, mid-kick, beside a woman with a cooking rig on her back",
              altZh: "一个戴着狮头的女孩腾空踢腿，旁边是背着炊具的女人",
              capEn: "Official still — a kick in mid-air on the street.",
              capZh: "官方剧照——街道上腾空的一记踢腿。",
              source: "stills"
            },
            {
              src: "assets/stills/goldfish-6.jpg",
              altEn: "A kick beside a lion-headed cart",
              altZh: "狮头餐车旁的踢腿",
              capEn: "Official still — movement on a wet street, next to a lion-headed cart.",
              capZh: "官方剧照——潮湿街道上，狮头餐车旁的动作。",
              source: "stills"
            }
          ]
        },
        {
          type: "videos",
          items: [
            {
              id: "4nqVxmtilzA",
              poster: "assets/yt-4nqVxmtilzA.jpg",
              titleEn: "Goldfish Mayhem | Behind the Scenes | Beyond the Loop S2",
              titleZh: "《金魚街大亂鬥》幕后花絮 ｜ Beyond the Loop 第二季",
              source: "yt"
            }
          ]
        },
        {
          type: "links",
          items: [
            {
              href: "https://boardmix.cn/app/share/CAE.COXspA8gASoQsqc7K6je5x5Cr_JW2E5n3DAFQAE/uySoI0",
              kindEn: "Boardmix — official link",
              kindZh: "Boardmix — 正式链接",
              labelEn: "Movement references",
              labelZh: "动作参考",
              noteEn: "Opens in a new tab. I am not logging in or embedding the board.",
              noteZh: "将在新标签页打开。这里不登录，也不嵌入看板。"
            },
            {
              href: "https://www.instagram.com/junielaux/p/DefAdokAb9G/",
              kindEn: "Instagram",
              kindZh: "Instagram",
              labelEn: "Kung fu behind-the-scenes, 2026.10.14",
              labelZh: "功夫幕后，2026.10.14",
              noteEn: "A public Instagram post.",
              noteZh: "已公开的 Instagram 帖子。"
            }
          ]
        },
        {
          type: "para",
          en: "About “hybrid AI” on this film, I want to stay with what I have actually described. I have not given a separate, formal definition of hybrid filmmaking just for Goldfish Mayhem. What I can say today is the process I have already spoken about: a human screenwriter, Mr. Duan; ChatGPT as a daily creative partner from very early on; then, at the video-generation stage, invideo Agent One as agentic video creation — a visual rehearsal first, then many rounds of direction, never a shortcut that skips iteration; CapCut Video Studio – Director Mode as an infinite canvas and a thinking space; and OpenArt Smart Shot / World Builder to plan a scene before it is rendered, and to try different shots.",
          zh: "关于这部影片里的「混合式 AI」，我想停留在自己真正描述过的事情上。我还没有单独为《金魚街大亂鬥》下过一个正式的 hybrid filmmaking 定义。今天我能说的，就是已经谈过的过程：人类编剧段先生；很早开始、几乎每天都在沟通的创意伙伴 ChatGPT；到了视频生成阶段，invideo Agent One 作为 agentic video creation——先做视觉预演，再经过很多轮指导，而不是跳过迭代的捷径；CapCut Video Studio – Director Mode 的无限画布，作为一个思考空间；以及 OpenArt 的 Smart Shot / World Builder，用来在渲染前计划场景，并尝试不同镜头。",
          source: "interview"
        },
        {
          type: "callout",
          kind: "gap",
          en: "What I have not yet confirmed in writing is the exact mix of live-action performance, on-set reference, and generated shots for particular kung fu moments — how a movement was filmed or referenced, and how it was then cut. The official behind-the-scenes film and the movement-reference board are what I can show today. A closer, confirmed breakdown can be added later.",
          zh: "我还没有书面确认：某一个功夫镜头里，真人表演、现场参考和生成画面究竟是怎样配合的，这个动作是怎样拍摄或被参考，后来又怎样剪在一起。今天我可以出示的，是官方幕后影片和动作参考看板。更细、也经过确认的拆解，可以以后再补。"
        },
        {
          type: "details",
          summary: { en: "A related award, but for a different film", zh: "一个相关的奖项，但是另一部作品" },
          blocks: [
            {
              type: "para",
              en: "On the Zcool deck I list a Best Hybrid Film award at the AI Film Festival Amsterdam. That award belongs to a different work, the short e^(iπ)+1=0, not to the method of Goldfish Mayhem. I mention it here only so the two are not mixed up.",
              zh: "在站酷PPT里，我列出了阿姆斯特丹 AI 电影节的最佳混合影片奖。那个奖属于另一部作品，短片《e^(iπ)+1=0》，并不是《金魚街大亂鬥》的制作方法。我在这里提起，只是避免把两件事混在一起。",
              source: "deck"
            }
          ]
        }
      ]
    },
    {
      id: "next",
      num: "05",
      titleEn: "What I want to do next",
      titleZh: "我接下来想做什么",
      navEn: "What I want to do next",
      navZh: "接下来",
      ghost: "未来",
      blocks: [
        {
          type: "lede",
          en: "What we have talked about so far is work I have already made. I also want to share a little of how I imagine the future — and to keep a clear line between plans I have already named, and ideas I am still exploring.",
          zh: "前面聊的是我已经做过的事情。接下来，想跟大家分享一点我对未来的想象——也会分清：哪些是我已经说过的愿望，哪些还只是仍在探索的构想。",
          source: "zcool"
        },
        {
          type: "images",
          cols: 2,
          items: [
            {
              src: "assets/deck/studio-work.jpg",
              altEn: "A workspace with screens and reference images",
              altZh: "一间有屏幕和参考图的工作空间",
              capEn: "A workspace image from the Zcool deck.",
              capZh: "站酷PPT中的工作空间画面。",
              source: "deck"
            },
            {
              src: "assets/deck/ai-world-2022.jpg",
              altEn: "A dense, colourful imagined garden-world",
              altZh: "一个浓密、色彩丰富的想象中的花园世界",
              capEn: "From the deck’s “creating worlds” timeline, when I began making worlds with AI.",
              capZh: "来自PPT「创造世界」时间线，我开始用 AI 创造世界的阶段。",
              source: "deck"
            }
          ]
        },
        {
          type: "paras",
          items: [
            {
              en: "We often discuss AI film, or how much it can lower the cost of production. Those questions matter. But if AI only helps us produce the old forms of media at a higher speed, I think that would be a little wasteful. After the internet arrived, it did not merely move newspapers onto a computer; it slowly changed how people talk, make and share. I am curious whether AI might also give birth to a kind of media we have not yet seen.",
              zh: "我们今天经常讨论 AI 电影、AI 短剧，或者它能把制作成本降低多少。这些都很重要，但我总觉得，如果 AI 只是让我们用更快的速度生产原来就有的内容形式，好像还有点可惜。就像互联网出现以后，它不只是让我们把报纸搬到电脑上，而是慢慢改变了人与人交流、创作和传播的方式。我很好奇，AI 会不会也催生一种我们今天还没见到的媒体？",
              source: "zcool"
            },
            {
              en: "I have been thinking about what I call Neural Media. In the last fifteen years we have watched artificial intelligence, deep learning and online algorithms rise. These systems sense and model our behaviour, predict what we might want, and can now generate content that folds into the media around us. New sensing tools — from smart rings and brain–computer interfaces to the gyroscope in a phone — are also reading the body in different ways. I think we are in the middle of Neural Media’s development, and that this is already changing the relationship between the filmmaker, the work and the audience.",
              zh: "所以我觉得，我们现在正处于神经媒体，Neural Media 的发展中段。过去十五年，我们见证了人工智能、深度学习以及各种在线算法的崛起。这些系统不断地感知和分析我们的行为，为我们建立模型，预测我们可能想要什么。生成式媒体出现后，系统甚至可以直接生成与我们相关的内容。与此同时，智能戒指、脑机接口 BCI，甚至智能手机里的陀螺仪，也在通过不同方式感知我们的身体。而这种新的媒体形态，也正在逐渐改变创作者、内容和观众之间的关系。",
              source: "zcool"
            },
            {
              en: "If you ask me what I most want to do in the future, my answer is: I want to bring dreams into reality. Everyone has a world in their head that no one else can see. I want to know whether a new art form could let us walk into someone else’s imagined world — to feel it, explore it, even leave a trace.",
              zh: "如果大家问我，未来最想做什么，我的答案是：我想把梦境带进现实。每个人脑海里都有一个别人看不到的世界。我很想知道，有没有一种新的艺术形式，可以让我们走进别人想象的世界，可以在里面感受、探索，甚至留下自己的痕迹。",
              source: "zcool"
            },
            {
              en: "I have been researching questions like this since 2023. This September, in Los Angeles, I visited DATALAND, which is called the world’s first AI art museum, and found that their work on multi-sensory art was close to some of what I had imagined. You wear a device that can sense signals from the body — heartbeat, movement, position in space — and those data become part of the art system. The images, sounds, even smells, change with the environment and with the people inside it. I became more sure that future moving-image media will slowly change from a fixed work into a world that can keep changing.",
              zh: "其实从 2023 年开始，我就一直在研究类似的课题。今年九月，我在美国洛杉矶参观了被称为世界首座 AI 艺术博物馆 DATALAND，发现他们对多感官艺术的探索，跟我的想象有一些相似的地方。进入这个空间时，你会佩戴一个能够感知身体信号的装置，采集心跳、身体运动和空间位置，这些数据也会成为整个艺术系统的一部分。你看到的影像、听到的声音，甚至闻到的气味，都会随着环境数据和观众的参与不断变化。我更加确定，未来的动态媒体，会逐渐从一个固定的作品，变成一个能够持续变化的世界。",
              source: "zcool"
            }
          ]
        },
        {
          type: "callout",
          kind: "idea",
          en: "I have recently been conceiving a futurist virtual ecosystem. It might combine AI agents, real-time generation, XR, and future sensing technologies such as brain–computer interfaces. In that world, humans and AI agents could talk and work together; the world itself would keep changing with what different characters do; some stories would not need every detail written in advance, but could keep generating inside rules, relationships, visual assets and narrative boundaries we have set. I am exploring this. It is not a greenlit production I can announce.",
          zh: "我最近一直在构想一个未来主义的虚拟生态系统。它可能结合 AI 智能体、实时生成、XR，以及脑机接口等未来的感知技术。在这个世界里，人类和 AI 智能体可以相互交流、合作；整个世界也会随着不同角色的行为持续发生变化；其中一些故事，也不需要由人类创作者提前写好每一个细节，而是可以在我们设定好的世界规则、人物关系、视觉资产和叙事边界之内，由 AI 持续生成和演化。这是我正在探索的构想，并不是一个已经立项、可以宣布开拍的项目。",
          source: "zcool"
        },
        {
          type: "para",
          en: "I hope, in the future, I can become a new kind of artist: a World Architect. What I am after is not merely “AI-generated film” or “AI-generated fiction”, but a form of dynamic, interactive, generative media we cannot yet fully imagine.",
          zh: "我希望未来，自己可以成为一种新型的艺术家。World Architect，世界建筑师。我所追求的，并不仅仅是「AI 生成的电影」，或者「AI 生成的小说」，而是探索一种我们今天还无法完全想象的，动态的、交互式的、生成型媒体的新形式。",
          source: "zcool"
        },
        {
          type: "para",
          en: "A Forbes reporter once asked me what matters most to me at this stage. I thought: in the age of AI, we may forget faster than we remember. So rather than only making entertainment that holds attention for a short time, I hope I will have the chance to make works of art that can last.",
          zh: "《福布斯》的记者曾经问我，现阶段对我来说，最重要的是什么。我当时就在想，在 AI 时代，我们遗忘的速度，可能比记住的速度还要快。所以，比起创作一部在短时间内受到很多关注的娱乐作品，我更希望自己有机会创造出一些真正能够留下来的艺术作品。",
          source: "zcool"
        },
        {
          type: "callout",
          kind: "idea",
          en: "Right now I am also developing a larger universe around a red-haired female hero. In that universe, women are not ordinary people waiting to be saved. They already have their own powers, which may come from emotion, memory, desire, instinct, the body or the heart — and from real struggles such as identity anxiety, social pressure, broken relationships, self-doubt, and the cost of growing up. This is work I am developing. I have not named a greenlit title for it here.",
          zh: "我现在也在发展一个更大的「红发女性英雄」宇宙。在这个宇宙里，女性不是等待被拯救的普通人。她们本身就拥有力量。这些力量可能来自情绪、记忆、欲望、直觉、身体或意识，也来自她们真实经历过的困境，比如身份焦虑、社会压力、破裂的关系、自我怀疑，以及成长过程中必须付出的代价。这是我正在发展的工作。我在这里没有宣布一个已经立项的片名。",
          source: "interview"
        },
        {
          type: "para",
          en: "If you also like creating worlds, or you are interested in new technologies and new art forms, you are very welcome to come and talk to us. Our studio is always looking for people who can walk this path together. I hope we will have the chance to create worlds together.",
          zh: "如果在座也有喜欢创造世界，或者对未来的新技术、新艺术形式感兴趣的朋友，很欢迎来找我们交流。我们工作室也一直都在招募可以并肩作战的小伙伴。希望未来有机会，跟大家一起创造世界。",
          source: "zcool"
        }
      ]
    },
    {
      id: "advice",
      num: "06",
      titleEn: "Advice for other creators",
      titleZh: "给其他创作者的建议",
      navEn: "Advice",
      navZh: "给创作者的建议",
      ghost: "建议",
      blocks: [
        {
          type: "lede",
          en: "I don’t think I have a complete answer about the future. What I can offer are a few things I have already learned by making work — not a set of rules for someone else’s career.",
          zh: "如果今天要让我给大家一个关于未来的答案，我可能真的给不出来。我能分享的，是自己在做作品时已经体会过的几件事——并不是一套关于别人职业生涯的规则。",
          source: "zcool"
        },
        {
          type: "tips",
          items: [
            {
              titleEn: "Protect authorship — start from what only you have lived",
              titleZh: "护住作者性——从只有你经历过的事情出发",
              whyEn: "Once technology can make spectacular images, I think what remains special in a work is its authorship: your experience, your eye, your feeling, and what you truly want to say or criticise. Goldfish Mayhem exists because I went back to Foshan, to a street downstairs from my home, and to memories that are mixed and not always comfortable.",
              whyZh: "当技术已经可以帮我们创造出非常壮观的画面，一部作品真正特别的地方，我觉得是它的作者性：创作者自己的经历、审美、情感，还有真正想表达和批判的东西。《金魚街大亂鬥》会存在，是因为我回到了佛山，回到家楼下的那条街，也回到那些混杂、并不总是舒适的记忆。",
              nextEn: "Before you open a new tool, write down the place, the person, or the question that only you would insist on putting into the work.",
              nextZh: "在打开新工具之前，先写下那个只有你会坚持放进作品里的地方、人或问题。",
              source: "zcool"
            },
            {
              titleEn: "Begin with your own culture and memory, even if the form is new",
              titleZh: "从自己的文化和记忆开始，即使形式是新的",
              whyEn: "I did not often have the chance to talk about my hometown. This film became a way to look back through images. Lion dance, kung fu, paper offerings, dessert shops, feng shui stalls, neighbourhood noise — I wanted to see whether those things could live in a future street, not only in a museum of the past.",
              whyZh: "过去我很少有机会讲述自己的家乡。这部片对我来说，是一个用影像重新回看自己成长背景的机会。醒狮、功夫、纸扎、糖水铺、风水摊、街坊之间吵吵闹闹的关系——我想试试看，这些东西能不能活在一条未来的街上，而不只是被放进对过去的纪念里。",
              nextEn: "List the ordinary places you actually walked through as a child, then ask what happens if you enlarge, distort, or move them into the time you are living in now.",
              nextZh: "先列出你小时候真正走过的那些普通地方，再问自己：如果把它们放大、变形，或者搬进你现在所处的时代，会发生什么。",
              source: "interview"
            },
            {
              titleEn: "Keep making the world — finish something, then make the next one",
              titleZh: "继续把世界做出来——完成一件，再做下一件",
              whyEn: "I am easily taken by a three-minute enthusiasm. Looking back, the thing I never quite gave up was creating worlds: oil pastels in 1999, physical sets as an art director, then prompts, code and models. The tools and the job title changed; the wish did not. I also don’t believe AI makes you lose authorship. Used well, it can take away some old limits, so you can return to the story you actually want to tell — and finish it.",
              whyZh: "我是个很容易三分钟热度的人。回头看，我一直没放弃的，是创造世界这件事：1999 年的油画棒，做美术指导时的真实场景，再后来是提示词、代码和模型。变的是工具和身份，没变的是把想象中的世界做出来。我也不认为 AI 会让创作者失去作者性。用得好，它反而可能打开过去的限制，让我们更直接地回到真正想讲的故事——并把它完成。",
              nextEn: "Choose one world small enough to finish, and take it far enough that someone else can walk into it.",
              nextZh: "选一个小到能够完成的世界，并把它推进到别人也愿意走进去的程度。",
              source: "zcool"
            },
            {
              titleEn: "Tell stories in which women can be the ones who act",
              titleZh: "去讲女性也可以行动的故事",
              whyEn: "I grew up watching kung fu films and wondering why the lead could not be a girl. In Goldfish Mayhem the three girls are not waiting to be perfect; they make trouble, they protect people, they invent things. AI, for me, has given more female filmmakers a chance to build worlds from their own point of view.",
              whyZh: "我从小看功夫片，总在想为什么主角不能是女孩子。在《金魚街大亂鬥》里，三个女孩并不是在等待自己变得完美；她们会闯祸，会保护别人，也会发明东西。对我来说，AI 也给了更多女性创作者从自己的视角去建立世界的机会。",
              nextEn: "If you have been waiting for permission to put a girl at the centre of an action or a world, you do not have to wait for a bigger budget before you start the first version.",
              nextZh: "如果你一直在等待许可，才能让一个女孩成为动作或世界的中心，不必先等到预算变大，才开始做第一个版本。",
              source: "interview"
            },
            {
              titleEn: "Notice how the relationship between brands and filmmakers is changing — and walk in earlier",
              titleZh: "留意品牌和创作者的关系正在改变——并更早走进去",
              whyEn: "I used to work in traditional advertising, so I feel this change clearly. A project used to travel from brand to agency to production company, and only then to the director. Now some brands invite the filmmaker in at the beginning, while the world is still being imagined — as REVAN did when we thought about those little characters together, before there was a finished brief.",
              whyZh: "因为我以前在传统广告行业工作过，所以对这个变化感受挺明显的。过去一个项目，通常从品牌到代理公司、制作公司，最后才到导演和创作团队。但现在，有些品牌会在最开始就邀请创作者一起讨论内容。REVAN 就是这样：我们先一起想象那些小角色会住在什么样的世界里，而不是先拿到一份写完的需求。",
              nextEn: "When you show your work, show not only the finished image, but how you build a world — that is often what someone is trying to invite.",
              nextZh: "展示作品时，不只展示完成的画面，也展示你是怎样建立一个世界的——那常常才是别人想邀请的东西。",
              source: "zcool"
            },
            {
              titleEn: "Treat AI as a partner, and keep human judgement in the room",
              titleZh: "把 AI 当作伙伴，也把人的判断留在现场",
              whyEn: "I talk to ChatGPT almost every day, and on this film I also worked with a human screenwriter, Mr. Duan. The story still came from human filmmakers. Tools such as invideo Agent One, CapCut Video Studio and OpenArt helped me rehearse, organise and try shots, but they did not skip iteration, and they did not make the decisions for me.",
              whyZh: "我几乎每天都和 ChatGPT 沟通，这部影片里我也和人类编剧段先生合作。故事本身仍然来自人类创作者。invideo Agent One、CapCut Video Studio 和 OpenArt 这些工具，帮助我预演、整理和尝试镜头，但它们并没有跳过迭代，也没有替我做决定。",
              nextEn: "Write down, for your own project, what must come from you or from another human being, and what a tool is allowed to test or expand.",
              nextZh: "为你自己的项目写下来：哪些必须来自你或另一个人，哪些可以交给工具去测试或延展。",
              source: "interview"
            }
          ]
        },
        {
          type: "para",
          en: "And if you like building worlds, you are welcome to find us. That is an invitation from the studio, not a piece of career advice I am handing down.",
          zh: "如果也有喜欢创造世界的朋友，很欢迎来找我们。这是工作室发出的邀请，而不是我在对别人的职业道路下指导。",
          source: "zcool"
        }
      ]
    },
    {
      id: "qa",
      num: "07",
      titleEn: "Live Q&A",
      titleZh: "现场问答",
      navEn: "Live Q&A",
      navZh: "现场问答",
      ghost: "问答",
      blocks: [
        {
          type: "html",
          html: "<div class=\"qa-banner\"><h2><span class=\"en\">Live Q&amp;A</span><span class=\"zh\">现场问答</span></h2></div>"
        },
        {
          type: "lede",
          en: "I would like to stay with you here and talk about the film, the way it was made, and AI filmmaking. The questions below are only prompts to open the room. They are not a substitute for the questions you actually want to ask.",
          zh: "我想在这里停下来，和大家一起聊聊这部电影、它的制作方式，以及 AI filmmaking。下面这些问题只是用来打开讨论的引导，并不能代替你们真正想问的问题。",
          source: "zcool"
        },
        {
          type: "prompts",
          items: [
            {
              qEn: "When images can be made very quickly, what does authorship still mean to you?",
              qZh: "当画面可以被很快做出来时，作者性对你来说还意味着什么？",
              noteEn: "I talked about this after the Los Angeles screening: once the technology grows stronger, the special thing is still the filmmaker’s own experience, taste and questions.",
              noteZh: "洛杉矶放映之后，我谈过这件事：技术越来越强之后，真正特别的，仍是创作者自己的经历、审美和问题。",
              source: "zcool"
            },
            {
              qEn: "What, for you, is the difference between the real Goldfish Street downstairs and the Goldfish Street in the film?",
              qZh: "对你来说，家楼下那条真的金鱼街，和电影里的金鱼街，差别在哪里？",
              noteEn: "The film’s street is fictional, assembled from Foshan, a street near Mong Kok, and childhood memory. I can also talk about the rotating restaurant that became the Cloud.",
              noteZh: "电影里的街是虚构的，来自佛山、旺角附近的一条金鱼街，以及童年记忆。我也可以谈谈后来变成「云端」的那家旋转餐厅。",
              source: "interview"
            },
            {
              qEn: "The three girls are three mirrors. Which side do you find hardest to look at?",
              qZh: "三个女孩是三面镜子。哪一面是你最不容易看的？",
              noteEn: "BOBO, 风水妹 / Fengshui Girl, and 细细粒 / Xixili each carry a different part of me. I have not named one of them as “the most me.”",
              noteZh: "BOBO、风水妹 / Fengshui Girl，以及细细粒 / Xixili，各自带着我的不同部分。我没有指定其中一个人「最像我」。",
              source: "interview"
            },
            {
              qEn: "How do you want kung fu to feel in this film — and what is still being worked out in the hybrid process?",
              qZh: "你希望这部影片里的功夫是什么样的感觉？混合式制作里，又有哪些地方还在被理清？",
              noteEn: "I can talk about 鸿胜武馆, girl heroes, the movement-reference board, and the official behind-the-scenes film. A shot-by-shot live-action / generated breakdown is still to be confirmed.",
              noteZh: "我可以谈鸿胜武馆、女性英雄、动作参考看板，以及官方幕后影片。按镜头拆开的真人 / 生成说明，仍待补充。",
              source: "interview"
            },
            {
              qEn: "Where exactly do ChatGPT, a human screenwriter, invideo Agent One, CapCut and OpenArt enter this film’s workflow?",
              qZh: "ChatGPT、人类编剧、invideo Agent One、CapCut 和 OpenArt，究竟是在这部影片工作流的哪些环节进入的？",
              noteEn: "I have already described this in the “From moodboard to screen” chapter. I’m glad to go over any one tool more slowly.",
              noteZh: "我在「从情绪板到银幕」一章里已经谈过。如果大家想把其中某一个工具再走慢一点，我很愿意。",
              source: "interview"
            },
            {
              qEn: "What do you want someone to feel two minutes after the film ends?",
              qZh: "你希望观众在影片结束两分钟后，心里留下什么？",
              noteEn: "I hope people can enjoy Goldfish Street as a funny, chaotic, strange and warm world — and perhaps recognise a childhood, a community, or a memory that is slowly disappearing.",
              noteZh: "我希望大家可以享受金鱼街这个好笑、混乱、奇怪但也温暖的世界；也许还会看见自己的童年、自己的社区，或某种正在慢慢消失的记忆。",
              source: "interview"
            },
            {
              qEn: "You spoke about Neural Media, DATALAND, and becoming a World Architect. What is already in motion, and what is still a conception?",
              qZh: "你谈到了神经媒体、DATALAND，以及成为世界建筑师。哪些已经在发生，哪些仍是构想？",
              noteEn: "The visit to DATALAND and the wish to make work that lasts are things I have already done or clearly named. The virtual ecosystem of agents, XR and BCI is still exploration.",
              noteZh: "探访 DATALAND，以及希望做出能够留下来的作品，是我已经做过或明确说过的。而智能体、XR 和 BCI 组成的虚拟生态系统，仍是探索中的构想。",
              source: "zcool"
            },
            {
              qEn: "You are developing a larger universe around a red-haired female hero. What can you say about it today?",
              qZh: "你正在发展一个更大的红发女性英雄宇宙。今天你能说到哪一步？",
              noteEn: "I can share the direction I have already written: powers that may come from emotion, memory and desire. It is work in development, not a greenlit title.",
              noteZh: "我可以分享已经写过的方向：力量可能来自情绪、记忆和欲望。这是正在发展的工作，不是一个已经立项的片名。",
              source: "interview"
            }
          ]
        },
        {
          type: "live-slot",
          title: { en: "Questions from the room", zh: "现场提出的问题" },
          en: "This space is left empty on purpose, so I can write down or stay with the questions that actually arrive during the livestream.",
          zh: "这一块是故意留空的，方便我在直播里记下、或停在大家真正问出来的问题上。"
        },
        {
          type: "details",
          summary: { en: "A few rapid-fire lines I can use lightly, if useful", zh: "如果需要，我可以轻轻用到的几句快问快答" },
          blocks: [
            {
              type: "paras",
              items: [
                {
                  en: "One word for Goldfish Mayhem: Mo lei tau. It’s chaotic, absurd, funny, emotional, and very rooted in Southern Chinese culture.",
                  zh: "用一个词形容《金魚街大亂鬥》：无厘头。它混乱、荒诞、好笑、有感情，而且深深扎在华南文化里。",
                  source: "interview"
                },
                {
                  en: "The AI tool I can’t live without: ChatGPT. Not only because I have worked with OpenAI. He really feels like a creative partner. I talk to him every day.",
                  zh: "我离不开的一个 AI 工具：ChatGPT。不只是因为我和 OpenAI 合作过。他真的像我的创意伙伴。我每天都在和他说话。",
                  source: "interview"
                },
                {
                  en: "London or Shanghai — which shows up more in my work? Neither, and both. The work is made from fragments of every city I have lived in — London, Shanghai, Foshan, Tokyo — stitched into one imagined world.",
                  zh: "伦敦还是上海——哪一个更多出现在我的作品里？都不是，也都是。作品是由我住过的每座城市的碎片做成的——伦敦、上海、佛山、东京——缝进一个想象的世界。",
                  source: "interview"
                },
                {
                  en: "If someone teases out a curry cannon, a tarot deck, or an 8G signal vehicle: honestly, I want all of them — and all the superpowers that come with them. That is a joke from a rapid-fire round, not a plot summary.",
                  zh: "如果有人拿咖喱炮、塔罗牌，或 8G 信号车来打趣：老实说，我都想要——以及它们附带的所有超能力。这是快问快答里的一句玩笑，不是剧情简介。",
                  source: "interview"
                }
              ]
            },
            {
              type: "callout",
              kind: "editorial",
              en: "An optional line I can say to camera, because the official film is already public on YouTube: “I’m Junie and my new film, Goldfish Mayhem, is out now.” Beyond the Loop, Season 2 is out now.",
              zh: "因为官方影片已经在 YouTube 上公开，我可以对着镜头选用这句：「I’m Junie and my new film, Goldfish Mayhem, is out now.」Beyond the Loop 第二季现在已经上线。"
            }
          ]
        }
      ]
    }
  ],
  sourceSection: {
    summary: { en: "Sources", zh: "来源" },
    intro: {
      en: "Important facts on this page carry a short source mark. The full list is here. I have only used material that is already public, or that I have already spoken in the first person in the Zcool talk or in an interview.",
      zh: "这个页面上的重要事实带有简短的来源标记。完整列表在这里。我只使用了已经公开的材料，或我已经在站酷讲稿和访谈里用第一人称说过的内容。"
    },
    endZh: "一起创造世界",
    endLead: {
      en: "If you like creating worlds, you are welcome to come and talk to us.",
      zh: "如果也有喜欢创造世界的朋友，很欢迎来找我们交流。",
      source: "zcool"
    }
  },
  sourceList: [
    {
      en: "Zcool talk / prompter — first-person spoken spine, including the 2035 cyber-folk logline, childhood in Foshan, 鸿胜武馆, authorship, Neural Media, DATALAND, World Architect, and the studio invitation.",
      zh: "站酷讲稿——第一人称讲述的主线，包括 2035 年赛博民俗故事简介、佛山童年、鸿胜武馆、作者性、神经媒体、DATALAND、世界建筑师，以及工作室邀请。"
    },
    {
      en: "Zcool 34-slide deck — visual language, key art, 1999 drawing and portraits, 金魚街大亂鬥 × WONDERSTUDIOS, and title forms.",
      zh: "站酷 34 页 PPT——视觉风格、主视觉、1999 年的画和肖像、「金魚街大亂鬥 × WONDERSTUDIOS」，以及片名写法。"
    },
    {
      en: "Interview Q&A — hometown and mixed culture, fictional Goldfish Street and the real street downstairs, the rotating restaurant, the three girls as mirrors, themes, tools (ChatGPT, Mr. Duan, invideo Agent One, CapCut Video Studio – Director Mode, OpenArt Smart Shot / World Builder), the red-haired hero universe still in development, and rapid-fire lines.",
      zh: "访谈问答——家乡与混合文化、虚构的金鱼街和家楼下的真街、旋转餐厅、三个女孩作为镜子、主题、工具（ChatGPT、段先生、invideo Agent One、CapCut Video Studio – Director Mode、OpenArt Smart Shot / World Builder）、仍在发展的红发英雄宇宙，以及快问快答。"
    },
    {
      en: "Official site work page — Goldfish Mayhem, year 2026, role Director, and the one-liner about a Cantonese cyberpunk world of kung fu and robo-cops. The simplified Chinese title 金鱼街大乱斗 appears there.",
      zh: "官网作品页——Goldfish Mayhem，年份 2026，职务导演，以及「粤式赛博朋克世界，功夫与机械警察」那句介绍。简体片名「金鱼街大乱斗」出现在那里。"
    },
    {
      en: "Official site SOURCES.md and LinkedIn — confirmed press and awards listed in chapter 1, including the September 2026 Forbes profile.",
      zh: "官网 SOURCES.md 与 LinkedIn——第一章列出的已确认报道与奖项，包括 2026 年 9 月的《福布斯》专访。"
    },
    {
      en: "YouTube, Wonder Studios — official film 8R4hEVX46fA, official trailer N3ZfYhO8cBY, behind the scenes 4nqVxmtilzA, all titled as Beyond the Loop S2.",
      zh: "YouTube，Wonder Studios——官方影片 8R4hEVX46fA、官方预告 N3ZfYhO8cBY、幕后 4nqVxmtilzA，标题均为 Beyond the Loop 第二季。"
    },
    {
      en: "Instagram — character reels for BOBO, FENG SHUI GIRL and LITTLE ONE; kung fu BTS on 2026.10.14; Wonder Studios collaboration reel on 2026.10.06.",
      zh: "Instagram——BOBO、FENG SHUI GIRL、LITTLE ONE 的角色短视频；2026.10.14 的功夫幕后；2026.10.06 的 Wonder Studios 合作短视频。"
    },
    {
      en: "Xiaohongshu — public entries for episode 1, episode 2, and the behind-the-scenes special.",
      zh: "小红书——已公开的第一集、第二集，以及幕后制作特辑。"
    },
    {
      en: "Production-reference links placed but not quoted for unpublished plot: final moodboard (Miro), official world-building and character-design board (Luma), additional character and environment references (Figma), movement references (Boardmix), and the project document (Google Doc).",
      zh: "已放置、但未从中摘录未公开情节的制作参考链接：最终情绪板（Miro）、正式的世界观与角色设计看板（Luma）、补充的角色与场景参考（Figma）、动作参考（Boardmix），以及项目文档（Google 文档）。"
    },
    {
      en: "Official stills already used on the public site, copied into this folder for the livestream page.",
      zh: "已经在公开网站使用过的官方剧照，复制到这个文件夹，供直播页使用。"
    }
  ]
};
