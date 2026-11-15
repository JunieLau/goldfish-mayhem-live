/* All bilingual copy and media paths for the Goldfish Mayhem site.
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
    liveTag: { en: "Live audience questions", zh: "现场观众提问" },
    callouts: {
      gap: { en: "To be confirmed", zh: "待补充" },
      editorial: { en: "Editorial note", zh: "编辑说明" },
      conflict: { en: "Source difference", zh: "来源差异" },
      idea: { en: "What I am exploring", zh: "构想 / 仍在探索" }
    },
    footer: {
      en: "Goldfish Mayhem — by Junie Lau.",
      zh: "Goldfish Mayhem — by Junie Lau."
    }
  },

  sourcesMap: {
    public: { en: "Publicly stated", zh: "已公开" },
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
    images: {
      type: "plates",
      items: [
        {
          kind: "title",
          highlight: "worlds",
          officialZh: "金魚街大亂鬥",
          wordmark: "G O L D F I S H    M A Y H E M",
          trailer: {
            id: "N3ZfYhO8cBY",
            poster: "assets/plates/13-goldfish-street.jpg",
            posterW: 3200,
            posterH: 1800,
            titleEn: "Goldfish Mayhem | Official Trailer | Beyond the Loop S2",
            titleZh: "《金魚街大亂鬥》官方预告 ｜ Beyond the Loop 第二季",
            source: "yt"
          },
          keyArt: {
            src: "assets/plates/13-key-art.jpg",
            w: 1086,
            h: 1448,
            altEn: "Key art for Goldfish Mayhem: three girls standing together, with the official title 金魚街大亂鬥 on the artwork",
            altZh: "《金魚街大亂鬥》主视觉：三个女孩站在一起，画面上保留官方片名"
          },
        }
      ]
    },
  },

  chapters: [
    {
      id: "intro",
      num: "01",
      titleEn: "Introducing myself",
      titleZh: "自我介绍",
      navEn: "Introducing myself",
      navZh: "自我介绍",
      ghost: "导演",
      blocks: [
        {
          type: "lede",
          en: "My name is Junie Lau. I am a director and creative based between London and Shanghai.",
          zh: "我叫 Junie Lau，是一名常驻伦敦和上海两地的导演和创意工作者。",
          source: "interview"
        },
        {
          type: "links",
          layout: "solo",
          items: [
            {
              href: "https://junielau.com/",
              kindEn: "Official website",
              kindZh: "官网",
              labelEn: "junielau.com",
              labelZh: "junielau.com"
            }
          ]
        },
        {
          type: "paras",
          items: [
            {
              en: "I create futuristic visual narratives for leading global brands and celebrities across fashion films, music videos, advertising, and AI cinema.",
              zh: "我为全球领先品牌和名人创作未来感视觉叙事作品，创作领域包括时尚电影、音乐录像和广告。",
              source: "interview"
            },
            {
              en: "My films have been shown at the Tribeca Film Festival and many international film festivals, and I have also worked with technology companies such as Google, OpenAI, and ByteDance.",
              zh: "我的影片曾在 Tribeca Film Festival 以及多个国际电影节展映，我也曾与 Google、OpenAI、ByteDance 等科技公司合作。",
              source: "interview"
            },
            {
              en: "By integrating AI into moving images, I am trying to develop a post-digital cinematic language — avant-garde, hyper-modern, and deeply exploratory. My work explores digital identity, digital humanities, and digital ontology with both emotional depth and critical reflection.",
              zh: "通过将 AI 融入动态影像创作，我正在尝试发展一种后数字时代的电影语言——前卫、超现代，并且具有深度探索性。我的作品以情感深度和批判性思考，持续探索数字身份、数字人文学和数字本体论。",
              source: "interview"
            },
            {
              en: "I am interested in how questions like “Who am I?” and “Where is humanity going?” are changing in a world shaped by new technologies, algorithms, data, and simulation.",
              zh: "我感兴趣的是，在一个由新技术、算法、数据和模拟塑造的世界里，“我是谁？”以及“人类将走向哪里？”这些问题正在如何发生改变。",
              source: "interview"
            }
          ]
        },
        {
          type: "plates",
          items: [
            {
              kind: "intro-awards",
              highlight: "director",
              ghost: "DIRECTOR",
              headline: "I am a *Film Director*?",
              wordmark: "D I R E C T O R",
              awards: [
                { n: "01", text: "Stable Diffusion AI Short Film Contest | Global Champion" },
                { n: "02", text: "Runway International AI Film Festival | Silver" },
                { n: "03", text: "Artefact AI Film Festival, France | Best Applied Award" },
                { n: "04", text: "London AIFA International AI Film Festival | Best Film" },
                { n: "05", text: "Amsterdam AI Film Festival | Best Hybrid Film" },
                { n: "06", text: "Project Odyssey Global AI Film Festival | Silver" }
              ],
              photos: [
                { src: "assets/plates/01-forbes-portrait.jpg", crop: { l: 51.007, r: 0.007, b: 3.5 }, altEn: "A portrait of Junie Lau in a red sculptural dress, holding a golden trophy next to a gold astronaut helmet", altZh: "Junie Lau 的肖像：穿着红色雕塑感礼服，手持金色奖杯，身旁是金色宇航头盔" },
                { src: "assets/plates/01-forbes-portrait.jpg", crop: { l: 0.3, r: 51.2, b: 4.458 }, altEn: "The Forbes profile “How AI And Peter Gabriel Changed Junie Lau’s Path To Directing”", altZh: "《福布斯》人物专访《How AI And Peter Gabriel Changed Junie Lau’s Path To Directing》" }
              ],
              capEn: "I am a director, with a short list of films and awards.",
              capZh: "我是一名导演，上面有我的影片和奖项。"
            },
            {
              kind: "milestones",
              highlight: "director",
              ghost: "TRIBECA",
              headline: "*International film festivals* and creative milestones",
              wordmark: "T R I B E C A",
              milestones: [
                { n: "07", title: "Tribeca Film Festival, USA", text: "Invited twice as a special guest" },
                { n: "08", title: "Our T2 Remake", text: "Co-director of the world’s first AI feature film" }
              ],
              photos: [
                { src: "assets/plates/02-tribeca-people.jpg", crop: { t: 0.123, b: 0.123 }, altEn: "Junie Lau with colleagues in front of a Tribeca Festival and Google step-and-repeat", altZh: "Junie Lau 与同行站在 Tribeca Festival 与 Google 的背景板前" },
                { src: "assets/plates/02-waic.jpg", crop: { l: 1.411, t: 1.5, r: 1.411, b: 1.5 }, altEn: "A festival stage at the World Artificial Intelligence Conference (WAIC)", altZh: "世界人工智能大会（WAIC）的舞台" },
                { src: "assets/plates/02-tribeca-premiere.jpg", crop: { l: 0.108, t: 50.2, r: 0.108 }, altEn: "Junie Lau at the Beyond the Loop 2 Los Angeles premiere", altZh: "Junie Lau 在 Beyond the Loop 2 洛杉矶首映" },
                { src: "assets/plates/02-tribeca-premiere.jpg", crop: { l: 30.11, r: 30.11, b: 50.0 }, altEn: "An aerial view of a city with the Tribeca Festival 25 mark", altZh: "城市航拍与 Tribeca Festival 25 标识" }
              ],
              capEn: "Festivals and milestones I have already reached, including invitations to the Tribeca Film Festival, and work as a co-director on Our T2 Remake.",
              capZh: "我已经走到的电影节和创作里程碑，包括受邀前往 Tribeca Film Festival，以及担任《Our T2 Remake》的联合导演。"
            },
            {
              kind: "artist",
              highlight: "artist",
              ghost: "ARTIST",
              headline: "I am an *artist*?",
              wordmark: "G O O G L E  ·  O P E N A I  ·  B Y T E D A N C E",
              credits: [
                "Google, OpenAI, ByteDance | Official collaborating artist",
                "Forbes | Profile of a woman AI artist",
                "Among the world’s leading AI filmmakers | Highly regarded by the industry",
                "Leading universities worldwide | Guest lecturer, including Tsinghua University and Peking University"
              ],
              photos: [
                { src: "assets/plates/03-dear-stranger.jpg", crop: { t: 0.098, b: 0.098 }, altEn: "Key art for Dear “Stranger”, a Google I/O collaboration", altZh: "与 Google I/O 合作的《Dear “Stranger”》主视觉" },
                { src: "assets/plates/03-love-from-void.jpg", crop: { t: 0.069, b: 0.069 }, altEn: "A still from Love from Void by Junie Lau, an OpenAI / Sora Selects work", altZh: "Junie Lau 的 Love from Void 剧照，OpenAI / Sora Selects 作品" },
                { src: "assets/plates/03-revan.jpg", crop: { t: 0.092, b: 0.092 }, altEn: "A portrait from the REVAN campaign, with Junie standing among large flowers", altZh: "REVAN 系列肖像：Junie 站在巨大的花丛中" }
              ],
              capEn: "I also work as an artist. This plate brings together collaborations with Google and OpenAI, a Forbes profile, and invitations to speak at universities including Tsinghua University and Peking University.",
              capZh: "我也做艺术家的工作。这块版面把与 Google、OpenAI 的合作、《福布斯》专访，以及包括清华、北大在内的高校邀请放在一起。"
            },
            {
              kind: "numerals",
              highlight: "artist",
              ghost: "JUNIE LAU",
              numerals: [
                { num: "10+", text: "Top-tier AI film competitions — invited to serve as a professional juror" },
                { num: "30+", text: "Domestic and international media — profiles, features, and published work" },
                { num: "40+", text: "Technology companies — long-term partnerships and industry exchange" },
                { num: "50", text: "Twice selected for the Global Top 50 Women AI Filmmakers", circled: true }
              ],
              photos: [
                { src: "assets/plates/04-interview.jpg", crop: { l: 2.0, r: 19.543, b: 51.0 }, altEn: "Junie Lau seated in a pale pink jacket, introduced as a film director and multidisciplinary creative", altZh: "Junie Lau 坐着，穿着浅粉色外套，介绍为电影导演与跨界创作者" }
              ],
              capEn: "A snapshot of the scale of that work, together with a portrait.",
              capZh: "这份工作体量的一个速写，旁边是一张肖像。"
            }
          ]
        },
        {
          type: "paras",
          items: [
            {
              en: "The path there still feels quite ordinary to me. I grew up in Guangdong, later studied in London, worked in fashion and advertising, and only then, because of AI, found my way into directing. When Forbes came to interview me, I was genuinely surprised. The title they chose, in September 2026, was “How AI And Peter Gabriel Changed Junie Lau’s Path To Directing.”",
              zh: "前段时间，《福布斯》给我做了一篇专访。我收到邀请的时候很惊讶，因为我一直觉得自己的经历挺普通的：一个在广东长大的女孩，后来去伦敦读书，在时尚和广告影视行业摸爬滚打，最后因为 AI，走上了导演这条路。2026 年 9 月刊出的标题是：《How AI And Peter Gabriel Changed Junie Lau’s Path To Directing》。",
              source: "public"
            }
          ]
        },
        {
          type: "links",
          layout: "solo",
          items: [
            {
                  href: "https://www.forbes.com/sites/maureenkerr/2026/09/04/how-ai-and-peter-gabriel-changed-junie-laus-path-to-directing/",
                  kindEn: "Press",
                  kindZh: "报道",
                  labelEn: "Forbes profile, September 2026",
                  labelZh: "《福布斯》专访，2026年9月"
                }
          ]
        },
        {
          type: "plates",
          items: [
            {
              kind: "timeline",
              highlight: "worlds",
              ghost: "CREATING WORLDS",
              headline: "Looking back over all these years, it seems there is only one thing I have never given up — *creating worlds*",
              moments: [
                {
                  title: "Hand-drawn",
                  date: "1999",
                  caption: "Creating worlds with oil pastels from childhood",
                  layout: "pair",
                  photos: [
                    { src: "assets/plates/06-drawing-1999.jpg", altEn: "A childhood oil-pastel drawing of a yellow rabbit, a house and a sun", altZh: "一幅童年油画棒作品：黄色的兔子、房子和太阳" },
                    { src: "assets/plates/06-childhood-1999.jpg", altEn: "A childhood photograph of Junie as a young girl, standing in front of drawings, holding a balloon", altZh: "Junie 童年的照片：小女孩站在画作前，手里拿着气球" }
                  ]
                },
                {
                  title: "Production Design",
                  date: "2020.07",
                  caption: "Creating worlds with timber structures, metal frameworks, fibreglass, scenic painting, 3D printing, LED screens and physical props",
                  layout: "sets",
                  photos: [
                    { src: "assets/plates/06-set-01.jpg", altEn: "A built street set, seen during production design", altZh: "美术指导期间搭建的街道场景" },
                    { src: "assets/plates/06-set-02.jpg", altEn: "A studio floor with cameras, costumes and an LED wall", altZh: "有摄影机、服装和 LED 屏的棚内" },
                    { src: "assets/plates/06-art-direction.jpg", altEn: "A densely built floral and architectural set", altZh: "一座铺满花卉与建筑细节的场景" }
                  ]
                },
                {
                  title: "Creating with AI",
                  date: "2022.02",
                  caption: "Creating worlds with Disco Diffusion",
                  layout: "pair-wide",
                  photos: [
                    { src: "assets/plates/06-disco-world.jpg", altEn: "An image made with Disco Diffusion", altZh: "用 Disco Diffusion 创作的画面" },
                    { src: "assets/plates/06-disco-ui.jpg", altEn: "A Google Colab window running Disco Diffusion v5.6, with prompt settings visible", altZh: "正在运行 Disco Diffusion v5.6 的 Google Colab 窗口，可见提示词设置" }
                  ]
                },
                {
                  title: "Grammy-winning musician Peter Gabriel AI music video",
                  date: "2023.05",
                  caption: "Made with Stable Diffusion and Midjourney",
                  layout: "pair-wide",
                  photos: [
                    {
                      youtube: "6chvzqAVCnI",
                      poster: "assets/plates/06-the-court.jpg",
                      posterW: 1920,
                      posterH: 1080,
                      titleEn: "Peter Gabriel - The Court (Dark-Side Mix) (Junie Lau Official Video)",
                      titleZh: "《The Court》（Dark-Side Mix）｜Junie Lau 官方影像，Peter Gabriel",
                      source: "yt"
                    },
                    { src: "assets/plates/06-the-court-winners.jpg", altEn: "A #DiffuseTogether winners screen, with Junie’s name marked, above a still from The Court", altZh: "#DiffuseTogether 获奖画面（标有 Junie 的名字），下方是《The Court》剧照" }
                  ]
                }
              ],
              capEn: "The path on one plate: a drawing from 1999, production design in July 2020, making worlds with Disco Diffusion in February 2022, and The Court, the AI music video for Peter Gabriel, in May 2023.",
              capZh: "整条路径放在同一块版面上：1999 年的画，2020 年 7 月的美术指导，2022 年 2 月用 Disco Diffusion 创造世界，以及 2023 年 5 月为 Peter Gabriel 创作的 AI MV《The Court》。"
            }
          ]
        },
        {
          type: "para",
          en: "In 2018, during my master’s at University of the Arts London, I started working with early artificial intelligence, virtual reality, mixed reality, and interactive art. In 2020, during the pandemic, I returned to China. I had few industry contacts then, and becoming a director overnight was not realistic, so I chose a job close to directing: production design. On set I worked with carpenters, prop makers, gaffers and cinematographers, and learned how to make an idea physically real.",
          zh: "2018 年，我在伦敦艺术大学读硕士，开始接触早期的人工智能、虚拟现实、混合现实，还有交互艺术。2020 年疫情期间，我回到中国。那时候没有什么行业人脉，想直接当导演不太现实，所以我选择了一个离导演很近的工作：美术指导。在片场，我跟木工、道具师、灯光师、摄影师一起工作，学习怎么把一个想法真正做出来。",
          source: "public"
        },
        {
          type: "paras",
          items: [
            {
              en: "In February 2022 I began using an early tool called Disco Diffusion. You had to generate an image in a way that felt almost like writing code, and each picture was slow. But it was the first time I felt that the strange, abstract images in my head could appear in this way.",
              zh: "直到 2022 年 2 月，我开始使用一个叫 Disco Diffusion 的早期 AI 工具。那时候生成一张图很慢，操作方式也有点像写代码。但我第一次觉得，原来脑子里那些很奇怪、很抽象的画面，可以用这种方式呈现出来。",
              source: "public"
            },
            {
              en: "I am easily taken by a three-minute enthusiasm, and I like trying new things. Looking back, though, one thing I never quite gave up: a love of art, and the work of creating worlds. The tools changed — from oil pastels, to sets, to prompts, code and models — but the wish stayed the same: to make the world in my imagination exist.",
              zh: "我其实是个很容易三分钟热度的人，喜欢不断尝试新东西。但最近回头看，我发现这么多年，好像只有一件事一直没有放弃：就是对艺术的热爱，还有创造世界这件事。变的是工具和身份，没变的是我一直想把想象中的世界做出来。",
              source: "public"
            }
          ]
        },
        {
          type: "para",
          en: "What really changed the direction of my career was an AI music video I made for Peter Gabriel in 2023. It won the global championship of Stability AI’s #DiffuseTogether competition. The work later received a silver award at an international AI film festival — in a later interview I said this was the Silver Award at the second Runway International AI Film Festival — and more people began to come to me for collaborations. Slowly I moved from production design into directing.",
          zh: "真正改变我职业方向的，是 2023 年为音乐人 Peter Gabriel 创作的一支 AI MV。它获得了 Stability AI 举办的比赛全球冠军。后来作品又拿到了国际 AI Film Festival 的银奖；在后来的访谈里，我说明这是第二届 Runway 国际 AI 电影节的银奖。越来越多人开始找我合作，我也慢慢从美术指导走到了导演的位置。",
          source: "public"
        },
        {
          type: "plates",
          items: [
            {
              kind: "chapter-quote",
              highlight: "worlds",
              ghost: "PREDICTTHEFUTURE",
              leftWord: "Creating Worlds",
              rightWord: "Imagining the Future",
              headline: "The best way to predict the future is to *create it.*",
              capEn: "A line I come back to: the best way to predict the future is to create it.",
              capZh: "我常回到的一句话：预测未来最好的方式，是创造它。"
            },
            {
              kind: "chapter-art",
              highlight: "worlds",
              headline: "*Creating worlds*",
              chapter: "C H A P T E R   0 2",
              photos: [
                { src: "assets/plates/08-creating-worlds.jpg", altEn: "Official artwork: a figure in white walking through a forest of red flowers, with the title 创造世界 on the image", altZh: "官方设定图：一个穿白衣的人走在红色的花林里，画面上保留「创造世界」标题" }
              ],
              capEn: "Creating worlds — the thread I keep returning to.",
              capZh: "创造世界——我一直回到的那条线。"
            }
          ]
        },
        {
          type: "para",
          en: "After I began making work with AI, I was invited to collaborate with OpenAI, Google and ByteDance. Some of those partners gave me enough room not only to finish a film, but to put in questions I really care about. What If, Mother, made with OpenAI, comes from a question I had been carrying: if I had never existed, what kind of life would my mother have lived? Dear “Stranger”, made with Google, is about my grandmother. I almost never told her “I love you” to her face; after she was gone, I tried to finish, on screen, a conversation that never happened in life.",
          zh: "开始使用 AI 创作以后，我陆续收到一些合作邀请，包括和 OpenAI、Google、字节跳动的项目。很幸运，有些合作方给了我比较大的创作空间。我和 OpenAI 合作的《What If, Mother》，来自一个我一直在想的问题：如果这个世界上从来没有我，我的妈妈会过着怎样的人生？和 Google 合作的《Dear “Stranger”》，则是关于我奶奶的故事。以前我很少当面跟她说「我爱你」，等她离开以后，我试着用影像去完成一段现实里没能发生的对话。",
          source: "public"
        },
        {
          type: "plates",
          items: [
            {
              kind: "collaborations",
              highlight: "worlds",
              partners: [
                { src: "assets/plates/09-runway.jpg", altEn: "Poster from the Runway AI Film Festival, with Junie Lau", altZh: "Runway AI Film Festival 海报，Junie Lau 作品", partner: "RUNWAY AI FILM FESTIVAL" },
                { src: "assets/plates/09-openai.jpg", altEn: "Poster for Love from Void, a collaboration with OpenAI", altZh: "《Love from Void》海报，与 OpenAI 的合作", partner: "OPENAI" },
                { src: "assets/plates/09-google.jpg", altEn: "Poster for Dear “Stranger”, a collaboration with Google", altZh: "《Dear “Stranger”》海报，与 Google 的合作", partner: "GOOGLE" },
                { src: "assets/plates/09-bytedance.jpg", altEn: "A collaboration poster with ByteDance: a red-haired figure in fire", altZh: "与字节跳动合作的海报：火焰中的红发人物", partner: "BYTEDANCE" },
                { src: "assets/plates/09-360.jpg", altEn: "Poster for 无限帧率, a collaboration with 360", altZh: "《无限帧率》海报，与 360 的合作", partner: "360" }
              ],
              capEn: "Collaborations I have been invited into, with Runway AI Film Festival, OpenAI, Google, ByteDance, and 360.",
              capZh: "我收到的一些合作邀请，包括 Runway AI Film Festival、OpenAI、Google、字节跳动，以及 360。"
            }
          ]
        },
        {
          type: "para",
          en: "From the beginning of last year I also started to receive invitations from AI-native entertainment studios overseas, to develop original film IPs with writers and production teams. There is the science-fiction story ZERO, the youth road story 51IT, the women’s revenge action film SCARLET MAGNOLIA, the cyber police story MADAM P!NK, and, most recently, Goldfish Mayhem — 金魚街大亂鬥. They often share one thing: the heroines are not necessarily perfect. They can be impulsive, rebellious, even make a complete mess. I like characters who feel alive in that way.",
          zh: "从去年年初开始，我也陆续收到海外 AI 原生娱乐工作室的邀请，和编剧、制作团队一起开发原创电影 IP。这里有科幻故事《ZERO》，青春爱情公路故事《51IT》，女性复仇动作片《猩红木兰》，还有赛博女警故事《MADAM P!NK》，以及最近推出的《金魚街大亂鬥》。它们经常有一个共同点：女主角不一定完美。她们可能冲动、叛逆，甚至把事情搞得一团糟。我反而很喜欢这样鲜活的角色。",
          source: "public"
        },
        {
          type: "plates",
          items: [
            {
              kind: "invitations",
              highlight: "worlds",
              ghost: "INVITATIONS",
              kickerLine: "Invitations from AI-native entertainment studios",
              invites: [
                { src: "assets/plates/12-zero.jpg", crop: { t: 2.576, b: 2.576 }, altEn: "Poster for ZEЯRO, a PROMISE title", altZh: "ZEЯRO 海报，PROMISE 出品", left: "ZEЯRO", right: "PROMISE" },
                { src: "assets/plates/12-51ist.jpg", crop: { t: 2.409, b: 2.409 }, altEn: "Poster for 51IST, a PROMISE title", altZh: "51IST 海报，PROMISE 出品", left: "51IST", right: "PROMISE" },
                { src: "assets/plates/12-mulan.jpg", crop: { t: 2.726, b: 2.726 }, altEn: "Poster for Scarlet Magnolia (猩紅木蘭), a PROMISE title", altZh: "猩紅木蘭海报，PROMISE 出品", left: "SCARLET MAGNOLIA", right: "PROMISE" },
                { src: "assets/plates/12-madam-pink.jpg", crop: { t: 2.803, b: 2.803 }, altEn: "Poster for MADAM PINK, with 幕间映画", altZh: "MADAM PINK 海报，幕间映画", left: "MADAM PINK", right: "幕间映画" },
                { src: "assets/plates/12-goldfish-mayhem.jpg", crop: { t: 2.803, b: 2.803 }, altEn: "Poster for Goldfish Mayhem — 金魚街大亂鬥 — with Wonder Studios", altZh: "《金魚街大亂鬥》海报，Wonder Studios", left: "金魚街大亂鬥", right: "WONDERSTUDIOS" }
              ],
              capEn: "Original film IPs I have been developing with production teams, including Goldfish Mayhem — Goldfish Mayhem × WONDERSTUDIOS.",
              capZh: "我和制作团队一起开发的原创电影 IP，其中包括《金魚街大亂鬥》——Goldfish Mayhem × WONDERSTUDIOS。"
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
          type: "paras",
          items: [
            {
              en: "*Goldfish Mayhem* is a cyber-folk action-comedy set amid the chaotic streets inspired by Junie Lau’s childhood neighborhood.",
              zh: "《金鱼街大乱斗》是一部赛博民俗动作喜剧，故事发生在以巨妮 Junie Lau 童年生活社区为灵感的混乱街巷中。"
            },
            {
              en: "The story follows three quirky, mischievous, and recklessly fearless girls—BOBO, FENG SHUI GIRL, and LITTLE ONE—who venture into a cloud-based digital world in a desperate attempt to save their foster mother from being sacrificed. There, they uncover a secret experiment in data immortality orchestrated by the city’s elite.",
              zh: "三个古灵精怪、不知天高地厚的少女——BOBO、风水妹与细细粒——为拯救即将被献祭的养母，闯入云端数字世界，并意外揭开城市上层社会秘密进行的“数据永生”实验。"
            },
            {
              en: "Blending street mythology, absurdist humor, ethical allegory, and a highly stylized Lingnan aesthetic from southern China, the film creates a world that is surreal, vibrant, and unmistakably rooted in its local culture.",
              zh: "影片融合街头神话、荒诞幽默、伦理寓言与高度风格化的中国岭南美学，构建出一个超现实、鲜活而又深深扎根于本土文化的世界。"
            }
          ]
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
          type: "plates",
          items: [
            {
              kind: "who",
              highlight: "worlds",
              headline: "WHO AM I?",
              titlePos: { x: 35.6, y: 42.0, w: 28.8 },
              photo: { src: "assets/plates/16-whoami-network.jpg", altEn: "A network of stills from the Goldfish Mayhem world, arranged around a central space for the question “Who am I?”", altZh: "《金魚街大亂鬥》世界里的一组剧照，环绕在「我是谁？」的中心留白周围" },
              tags: [
                { label: "+ cyber-folk", x: 1.6, y: 17.73 },
                { label: "+ Lingnan aesthetics", x: 1.8, y: 81.82 },
                { label: "+ action comedy", x: 17.2, y: 93.64 },
                { label: "+ street myth", x: 28.8, y: 30.45 },
                { label: "+ BOBO", x: 42.8, y: 20.45 },
                { label: "+ Xixili", x: 44.4, y: 86.36 },
                { label: "+ the Cloud", x: 68.4, y: 82.27 },
                { label: "+ Goldfish Street", x: 72.0, y: 60.0 },
                { label: "+ Fengshui Girl", x: 74.6, y: 13.18 },
                { label: "+ data immortality", x: 89.2, y: 13.18 }
              ],
              capEn: "A plate I use when I ask “Who am I?” of this world — the three girls, the street, the Cloud, and the ideas around them, kept on one layout.",
              capZh: "我问「我是谁?」时用的版面：三个女孩、金鱼街、云端，以及旁边那些想法，都留在同一张版式上。"
            }
          ]
        },
        {
          type: "heading",
          num: "01",
          en: "The future world I created grew out of my childhood in Foshan and the Goldfish Street just outside my home.",
          zh: "我创造的未来世界，源于我在家乡的童年生活，以及楼下那条金鱼街。"
        },
        {
          type: "paras",
          items: [
            {
              en: "*Goldfish Mayhem* is the first short film I have made that is truly rooted in my hometown. I am from Foshan, Guangdong, and there really was a Goldfish Street just outside my childhood home. Despite its name, there were no goldfish for sale. It was lined with wallpaper shops, hardware stores and restaurants, with local people going about their daily lives. There is also a Goldfish Street near Mong Kok in Hong Kong. The street in the film brings together my impressions of these places and my childhood memories.",
              zh: "《金魚街大亂鬥》是我第一部真正从家乡出发创作的短片。我来自广东佛山，小时候住的楼下，真的有一条金鱼街。那里并不卖金鱼，而是开着墙纸店、五金店和餐饮店，有着我熟悉的街坊生活。香港旺角附近也有一条金鱼街。电影中的金鱼街，融合了我对这些地方的印象，以及自己的童年记忆。",
              source: "public"
            },
            {
              en: "I grew up speaking Cantonese and watching Hong Kong comedies, especially Stephen Chow’s films. My upbringing brought together Guangdong and Hong Kong culture, British influences, Japanese pop culture and cultures from other parts of China. These different influences gradually shaped my visual style and made me want to develop a visual language of my own.",
              zh: "我从小主要讲粤语，也看了很多香港喜剧电影，尤其喜欢周星驰的作品。我的成长受到多种文化的影响，包括广东文化、香港文化、英国文化、日本流行文化，以及中国其他地区的文化。这些不同的影响慢慢塑造了我的视觉风格，也让我想创造属于自己的视觉语言。",
              source: "interview"
            },
            {
              en: "After seeing more of the world, I found myself looking back at the small community where I grew up, asking what stories and perspectives were distinctly my own. I feel that the kind of Hong Kong comedy I grew up with has become less common, and that some aspects of local Cantonese culture are becoming less widely known. This has given me a sense of responsibility as a filmmaker: to bring the world in my memory to the screen and reimagine it.",
              zh: "接触到更大的世界之后，我反而开始回望自己成长的那个小社区，思考什么才是独属于我的故事与表达。我也感觉，过去熟悉的港式喜剧越来越少见，一些粤语地区的本土文化，也似乎越来越少被人了解。这让我觉得，作为电影创作者，我有责任通过影像，把记忆中的那个世界重新呈现、重新想象。",
              source: "interview"
            },
            {
              en: "The fish ball stalls, feng shui stalls, shops selling paper offerings, dessert shops, wishing tree, dai pai dong and other street stalls in the film all come from things I saw and experienced growing up. So do the lion dancing, martial arts and everyday neighbourhood life. I magnified, distorted and reassembled these memories, adding my own ideas and questions about the future to create a more fantastical, cyberpunk version of Goldfish Street.",
              zh: "所以，电影里的鱼蛋档、风水摊、纸扎店、糖水铺、许愿树、大排档和街头摊档，以及醒狮、武术和街坊生活，都来自我成长过程中见过、感受过的东西。我把这些记忆放大、变形、重组，再加入对未来的想象和提问，构建出一个更奇幻、更赛博的金鱼街。",
              source: "interview"
            }
          ]
        },
        {
          type: "heading",
          num: "02",
          en: "Through the contrast between the human warmth of Goldfish Street and the cold order of the Cloud, I ask: what does a better life really mean?",
          zh: "在金鱼街的市井温情与云端的冰冷秩序之间，我想问：什么才是更好的生活？"
        },
        {
          type: "paras",
          items: [
            {
              en: "The Cloud was inspired by a revolving restaurant I visited with my parents as a child. It was expensive, and I could only go if I worked hard at school and got good grades. In my childhood memories, it represented a “better place”: higher up, more expensive and harder to reach.",
              zh: "云端的灵感，来自小时候和父母去过的一家旋转餐厅。那里消费比较高，只有努力学习、拿到好成绩，我才有机会去。在童年的记忆里，它代表着一个“更好的地方”：更高、更贵，也更难抵达。",
              source: "interview"
            },
            {
              en: "That memory became the starting point for the world of the Cloud. In the film, it stands in sharp contrast to Goldfish Street, which is rooted in everyday neighbourhood life: lively, chaotic and full of emotion and human connection. The Cloud sits high above it, cold and orderly, with life defined by success and constant upgrades.",
              zh: "这段记忆后来成为云端世界的起点。在电影里，它与金鱼街形成了鲜明的对照：金鱼街扎根于街坊的日常，热闹、混乱，充满情感和人情；云端则高高在上，冰冷而有秩序，生活由成功和不断升级来定义。",
              source: "interview"
            },
            {
              en: "Through this contrast, I want to explore the relationship between technology and a “better life”. As we upgrade and modify our bodies, and even pursue digital immortality, we may become a new kind of human. But will these changes truly lead us towards a better future?",
              zh: "我想通过这两个世界的对照，探索科技与“更好的生活”之间的关系。未来，当我们不断升级、改造身体，甚至追求数字永生，成为某种“新人类”时，这些变化是否真的会把我们带向更好的未来？",
              source: "interview"
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
          type: "heading",
          num: "03",
          en: "With AI, I can bring to life the stories I wanted to see as a child: girls becoming heroes, saving others and saving the world.",
          zh: "借助 AI，我可以拍出小时候就想看的故事：女孩成为英雄，拯救他人，也拯救世界。"
        },
        {
          type: "paras",
          items: [
            {
              en: "When I was eight, my mother took me to the Hongsheng martial arts school, where I saw people practise kung fu up close for the first time. I also grew up watching kung fu films, but many of the stories I knew about martial arts, heroes and saving the world were told from a male perspective. I often wondered: why couldn’t the lead be a girl?",
              zh: "八岁时，妈妈带我去鸿胜武馆，那是我第一次近距离看人练功夫。我也从小看功夫片长大，但我熟悉的许多关于功夫、英雄和拯救世界的故事，都是从男性视角讲述的。我常常想：为什么主角不能是女孩？",
              source: "public"
            },
            {
              en: "I wanted to put girls at the centre of the story and bring my own perspective as a female filmmaker to the screen. This has always been an important reason for wanting to make *Goldfish Mayhem*. In the past, however, budget and production constraints made these ideas difficult for me to realise. AI has given me a level of creative freedom I did not have before, allowing me to finally turn the images in my head into a film.",
              zh: "我想让女孩站在故事的中心，把自己作为女性创作者的视角带进电影。这一直是我想拍《金魚街大亂鬥》的重要原因。但在过去，预算和制作规模限制了我实现这些想象的可能。AI 给了我过去没有的创作自由，让那些留在脑海里的画面终于有机会变成电影。",
              source: "public"
            },
            {
              en: "With that creative freedom comes a stronger desire to explore kung fu, the future and digital immortality from a female perspective, focusing on ordinary women striving for a better life in a changing world. I also believe AI can give more female creators the opportunity to make their voices heard, build worlds of their own and tell stories from their own unique points of view.",
              zh: "有了这种创作自由，我也更希望从女性视角出发，讲述关于功夫、未来与数字永生的故事，关注普通市井女性如何在一个不断变化的世界里努力向上、争取更好的生活。我相信，AI 也能让更多女性创作者有机会发声，构建自己的世界，用各自独特的视角讲述故事。",
              source: "public"
            }
          ]
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
          type: "section",
          summary: { en: "What the film is asking", zh: "这部影片在问什么" },
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
                }
              ]
            }
          ]
        },
        {
          type: "links",
          layout: "grid-4",
          items: [
            {
              href: "https://www.xiaohongshu.com/explore/6aedce5000000000090116f9",
              kindEn: "Xiaohongshu",
              kindZh: "小红书",
              labelEn: "Episode 1 ｜ Prologue",
              labelZh: "第一集｜序",
              poster: "media/xhs/ep1.jpg",
              posterW: 1086,
              posterH: 1448,
              altEn: "Episode 1 ｜ Prologue",
              altZh: "第一集｜序"
            },
            {
              href: "https://www.xiaohongshu.com/explore/6af1b6610000000033021bb4",
              kindEn: "Xiaohongshu",
              kindZh: "小红书",
              labelEn: "Episode 2 ｜ One (three little tyrants)",
              labelZh: "第二集｜壹（三位小霸王）",
              poster: "media/xhs/ep2.jpg",
              posterW: 1680,
              posterH: 2240,
              altEn: "Episode 2 ｜ One (three little tyrants)",
              altZh: "第二集｜壹（三位小霸王）"
            },
            {
              href: "https://www.xiaohongshu.com/explore/6af9b924000000002a02f1ae?xsec_token=CBg_iBgLOAuYecGpVJirIQPQIRN74hqG1A5QVLYw8bnYU=&xsec_source=app_share",
              kindEn: "Xiaohongshu",
              kindZh: "小红书",
              labelEn: "Episode 3 ｜ Two",
              labelZh: "第三集｜贰",
              poster: "media/xhs/ep3.jpg",
              posterW: 1086,
              posterH: 1448,
              altEn: "Episode 3 ｜ Two",
              altZh: "第三集｜贰"
            },
            {
              href: "https://www.xiaohongshu.com/explore/6af431e500000000230134f4",
              kindEn: "Xiaohongshu",
              kindZh: "小红书",
              labelEn: "Behind-the-scenes special",
              labelZh: "幕后制作特辑",
              poster: "media/xhs/bts.jpg",
              posterW: 2160,
              posterH: 2880,
              altEn: "Behind-the-scenes special",
              altZh: "幕后制作特辑"
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
          type: "process-graphic",
          steps: [
            { num: "01", en: "World-building", zh: "世界观构建" },
            { num: "02", en: "Character design", zh: "角色设计" },
            { num: "03", en: "Set design", zh: "场景设计" },
            { num: "04", en: "Video generation", zh: "视频生成" }
          ]
        },
        {
          type: "steps",
          items: [
            {
              id: "worldbuilding",
              titleEn: "World-building",
              titleZh: "世界观构建",
              blocks: [
                {
                  type: "para",
                  en: "I wanted to try placing the things I know — lion dance, kung fu, paper offerings, sweet-soup shops, hawkers, feng shui stalls, and that close, slightly noisy way neighbours live in Guangdong — into a future street. What happens when a lion dance has a mechanical body, or when a Cantonese old street starts to take up cyber prosthetics and memory upload? The Cloud above that street, as I have said, grew out of a rotating restaurant I could only visit if I did well enough at school: a “higher place.”",
                  zh: "我想试试看，能不能把这些我熟悉的东西放进一个未来世界：醒狮、功夫、纸扎、糖水铺、街头小贩、风水摊，还有广东街坊之间那种很亲近、又有点吵吵闹闹的关系。比如醒狮有了机械身体，一条广东老街开始流行赛博义肢和记忆上传，会发生什么事情？而那条街上方的云端，如我所说，来自我小时候只有考好了才有机会去的旋转餐厅：一个「更高的地方」。",
                  source: "public"
                },
                {
                  type: "para",
                  en: "The first thing I need is a place to hold the feeling of the world — colour, street life, the clash between something very local and something already speeding toward the future. These official links belong here, in the order of early process: from the first idea to the final moodboard. The screenplay, and the character design and background story, also sit with them here. They are early design, early inspiration and early research — not later making.",
                  zh: "首先我需要一个地方，把这个世界的感觉放下——颜色、市井生活，以及非常本地的事物和已经冲向未来的事物怎样撞在一起。这些正式链接都放在这里，顺序是早期过程：从最初的想法，到最终情绪板。剧本和角色设计与背景故事两页也放在这里。它们是早期设计、早期灵感和早期研究，而不是后面的制作环节。",
                  source: "interview"
                },
                {
                  type: "links",
                  layout: "grid-3",
                  items: [
                    {
                      href: "https://docs.google.com/document/d/1VcMepSYRJIBV8J73Q2OGmHHfble0TXMi_-3V2NyDFGQ/edit?usp=sharing",
                      kindEn: "Google Doc — official link",
                      kindZh: "Google 文档 — 正式链接",
                      labelEn: "Project document (first IDEA)",
                      labelZh: "项目文档（最初的想法）",
                      noteEn: "Project document, and the first idea.",
                      noteZh: "项目文档，也是最初的想法。"
                    },
                    {
                      href: "https://www.figma.com/board/VrMF8IULPUp7JQ9RESBTzx/GOLDFISH-MAYHEM?node-id=0-1&t=ZSduhjK4uau2P4OO-1",
                      kindEn: "Figma — official link",
                      kindZh: "Figma — 正式链接",
                      labelEn: "Character and Environment references (Moodboard 1)",
                      labelZh: "角色与场景参考（情绪板 1）",
                      noteEn: "Early character and environment references.",
                      noteZh: "早期的角色与场景参考。"
                    },
                    {
                      href: "https://boardmix.cn/app/share/CAE.COXspA8gASoQsqc7K6je5x5Cr_JW2E5n3DAFQAE/uySoI0",
                      kindEn: "Boardmix — official link",
                      kindZh: "Boardmix — 正式链接",
                      labelEn: "Movement references (Moodboard 2)",
                      labelZh: "动作参考（情绪板 2）",
                      noteEn: "Early movement references.",
                      noteZh: "早期的动作参考。"
                    },
                    {
                      href: "https://miro.com/app/board/uXjVGg8zP5k=/?share_link_id=713540723386",
                      kindEn: "Miro — official link",
                      kindZh: "Miro — 正式链接",
                      labelEn: "Final moodboard (FINAL FINAL)",
                      labelZh: "最终情绪板（FINAL FINAL）",
                      noteEn: "The final moodboard.",
                      noteZh: "最终情绪板。"
                    },
                    {
                      href: "screenplay.html",
                      kindEn: "On this site",
                      kindZh: "本站页面",
                      labelEn: "Screenplay",
                      labelZh: "剧本"
                    },
                    {
                      href: "character-design.html",
                      kindEn: "On this site",
                      kindZh: "本站页面",
                      labelEn: "Character design and background story",
                      labelZh: "角色设计与背景故事"
                    }
                  ]
                },
                {
                  type: "images",
                  cols: 1,
                  items: [
                    {
                      src: "media/miro/final-moodboard.png",
                      natural: true,
                      modest: true,
                      href: "https://miro.com/app/board/uXjVGg8zP5k=/?share_link_id=713540723386",
                      hideGo: true,
                      altEn: "Overview of the official final moodboard, with the character and set-design frames",
                      altZh: "最终情绪板全貌，含人物与场景两个画框",
                      capEn: "Final moodboard.",
                      capZh: "最终情绪板。"
                    }
                  ]
                }
              ,

              ]
            },
            {
              id: "characters",
              titleEn: "Character design",
              titleZh: "角色设计",
              blocks: [
                        {
                  type: "para",
                  en: "There are three girls in the film. They are more like three different mirrors, each reflecting a different part of who I am, rather than any one of them standing in for me completely.",
                  zh: "片子里有三个主要女孩。我不会说哪一个角色完全代表我。她们更像是三面不同的镜子，分别折射出我性格里的不同部分。",
                  source: "interview"
                },
                        {
                  type: "cast",
                  items: [
                    {
                      "eyebrowEn": "Proudly Introducing",
                      "eyebrowZh": "隆重介绍",
                      "titleEn": "Goldfish Street’s “Monkey King” — BOBO",
                      "titleZh": "金鱼街的「齐天大圣」——BOBO",
                      "keyEn": "“Monkey King”",
                      "keyZh": "「齐天大圣」",
                      "taglineEn": "Her trade is humble; her opinion of herself is not.",
                      "taglineZh": "身在油盐酱醋里，心比凌霄宝殿高。",
                      "bodyEn": [
                        "A fishball seller and heir to a kung fu school, BOBO has formidable fighting skills and an equally formidable sense of her own importance.",
                        "Her robotic arm was built to make fishballs; her curry fishball cannon ensures that anyone threatening the neighbours receives a hot meal at considerable speed.",
                        "She runs a food cart with the authority of a grandmaster and walks through the street as though expecting a standing ovation.",
                        "Raised by the neighbourhood, she considers everyone’s troubles her personal responsibility.",
                        "Her heart is in the right place; her fists tend to get there first.",
                        "She insists she has given up on her dreams, although the hope of reopening her old kung fu school has proved rather difficult to abandon.",
                        "Threaten a neighbour, however, and Goldfish Street’s “Monkey King” returns to heroic duty—without waiting to be asked."
                      ],
                      "bodyZh": [
                        "鱼蛋摊主，武馆传人，南拳有根有据，自信无边无际。",
                        "机械臂原为搓丸，咖喱炮兼管不平。",
                        "一辆小吃车，硬是摆出山门气派。",
                        "平日昂首过街，仿佛天下英雄皆欠她一句佩服。",
                        "吃百家饭长大，便把百家闲事一并包办。",
                        "脾气与义气齐飞，拳头比道理先到。",
                        "嘴上自称早已没有梦想，可一见街坊受欺，这位隐居鱼蛋摊前的「齐天大圣」，便又擅自复职。"
                      ],
                      "quoteEn": "BOBO carries my angry and rebellious side, and the part of me that wants to protect the people around me.",
                      "quoteZh": "BOBO 有我暴躁、叛逆，也想保护身边人的一面。",
                      "variantsEn": "Published form: BOBO (talk deck, interview, Instagram).",
                      "variantsZh": "已公开的写法：BOBO（访谈、Instagram）。",
                      "source": "interview",
                      "poster": {
                        "href": "https://www.instagram.com/junielaux/reel/Dd876e-hI6l/",
                        "kindEn": "Instagram",
                        "kindZh": "Instagram",
                        "labelEn": "Goldfish Street: BOBO",
                        "labelZh": "金鱼街：BOBO",
                        "poster": "assets/ig/Dd876e-hI6l.jpg",
                        "posterW": 360,
                        "posterH": 640,
                        "altEn": "Cover of the Goldfish Street: BOBO Instagram reel"
                      }
                    },
                    {
                      "eyebrowEn": "Proudly Introducing",
                      "eyebrowZh": "隆重介绍",
                      "titleEn": "Goldfish Street’s “Oscar-Worthy” Actress — FENG SHUI GIRL",
                      "titleZh": "金鱼街的「奥斯卡」影后——风水妹",
                      "keyEn": "“Oscar-Worthy”",
                      "keyZh": "「奥斯卡」",
                      "taglineEn": "A saintly smile; a thoroughly commercial mind.",
                      "taglineZh": "眉间三分慈悲相，袖里七分生意经。",
                      "bodyEn": [
                        "Her fortune-telling stall is her stage, and every consultation is a starring performance.",
                        "Her compass finds north; her instincts tell her what you can afford.",
                        "You come seeking your fortune; she sees an opportunity to improve hers.",
                        "You believe you have found someone who understands you; she believes she has found a valued customer.",
                        "She can move a flowerpot without touching it, but persuading you to open your wallet is her real speciality.",
                        "Every smile is carefully judged, every gesture perfectly timed—even her sympathy comes at a price.",
                        "Whether your luck improves remains to be seen; her bank balance improves immediately.",
                        "The secrets of the universe are, of course, strictly confidential—unless you can afford the consultation fee."
                      ],
                      "bodyZh": [
                        "算命摊前的当家花旦，未必句句真心，却能声声入耳。",
                        "罗盘定方位，眼色定行情。",
                        "你问前程，她看财路；你以为遇见知己，她认为遇见贵客。",
                        "气功能移花盆，口才能动钱袋。",
                        "一颦一笑皆有章法，连善解人意也颇具商业价值。",
                        "一番指点过后，客人能否转运尚待观察，她的财运倒已当场应验。",
                        "都说天机不可泄漏，她认为，此事可以酌情收费。"
                      ],
                      "quoteEn": "She carries the part of me that has to perform in social situations, and sometimes wear another face.",
                      "quoteZh": "风水妹有我在社交场合里需要表演、需要戴上另一种面具的一面。",
                      "variantsEn": "Talk deck and Xiaohongshu: 风水妹. Interview: Fengshui Girl. Instagram: FENG SHUI GIRL. These are published variants, not one official standard.",
                      "variantsZh": "小红书：风水妹。访谈英文：Fengshui Girl。Instagram：FENG SHUI GIRL。这些都是已公开的不同写法，我不会把它们收成一个标准官方名。",
                      "source": "interview",
                      "poster": {
                        "href": "https://www.instagram.com/junielaux/reel/Dd5_GT6B8f-/",
                        "kindEn": "Instagram",
                        "kindZh": "Instagram",
                        "labelEn": "Goldfish Street: FENG SHUI GIRL",
                        "labelZh": "金鱼街：FENG SHUI GIRL",
                        "poster": "assets/ig/Dd5_GT6B8f-.jpg",
                        "posterW": 360,
                        "posterH": 640,
                        "altEn": "Cover of the Goldfish Street: FENG SHUI GIRL Instagram reel"
                      }
                    },
                    {
                      "eyebrowEn": "Proudly Introducing",
                      "eyebrowZh": "隆重介绍",
                      "titleEn": "Goldfish Street’s “Nobel-Worthy” Inventor — LITTLE ONE",
                      "titleZh": "金鱼街的「诺贝尔」发明家——细细粒",
                      "keyEn": "“Nobel-Worthy”",
                      "keyZh": "「诺贝尔」",
                      "taglineEn": "Incense for the dead; bright ideas for the living.",
                      "taglineZh": "一炷清香敬祖宗，满屏代码探天机。",
                      "bodyEn": [
                        "A deadpan genius, Little One runs a shop selling paper phones, computers and other offerings to be burnt as gifts for the afterlife.",
                        "Others burn paper money for their ancestors; she burns Bitcoin access codes—apparently, being dead is no excuse for falling behind on technology.",
                        "She rarely speaks, and when she does, her remarks tend to require decoding.",
                        "The neighbours mistake her late-night coding sessions for attempts to summon spirits—an understandable error, given the incense and eerie blue light.",
                        "Her ambitions are modest: uncover the secrets of the mysterious world known as the Cloud, and see her family once more.",
                        "As for the distinction between science and superstition, the matter remains under review, pending a response from her ancestors."
                      ],
                      "bodyZh": [
                        "纸扎铺里的冷面奇才，白日经营阴间百货，深夜钻研阳间科技。",
                        "别人烧纸钱，她烧比特币密钥；别人求祖先保佑，她先替祖先升级装备。",
                        "平日惜字如金，开口宛如天书，街坊以为她在招魂，其实她在写程式。",
                        "一生所愿，无非探探云端底细，再见家人一面。",
                        "至于科学与迷信如何划界，不妨等祖先回信再议。"
                      ],
                      "quoteEn": "She carries my curiosity about new technology, strange inventions, different dimensions, and the unknown.",
                      "quoteZh": "细细粒则有我对新科技、奇怪发明、多维度世界和未知事物的好奇心。",
                      "variantsEn": "Talk deck and Xiaohongshu: 细细粒. Interview: Xixili. Instagram: LITTLE ONE. Again, published variants only.",
                      "variantsZh": "小红书：细细粒。访谈英文：Xixili。Instagram：LITTLE ONE。同样只并列已公开的写法。",
                      "source": "interview",
                      "poster": {
                        "href": "https://www.instagram.com/junielaux/reel/Dd3bIc3uqDZ/",
                        "kindEn": "Instagram",
                        "kindZh": "Instagram",
                        "labelEn": "Goldfish Street: LITTLE ONE",
                        "labelZh": "金鱼街：LITTLE ONE",
                        "poster": "assets/ig/Dd3bIc3uqDZ.jpg",
                        "posterW": 360,
                        "posterH": 640,
                        "altEn": "Cover of the Goldfish Street: LITTLE ONE Instagram reel"
                      }
                    }
                  ]
                },
                {
                  type: "reel-copy",
                  source: "interview",
                  en: "The three girls are not perfect heroines. They can be impulsive, rebellious, and make a mess — and I like that. As I said earlier, they are also three mirrors of myself: BOBO, 风水妹 / FENG SHUI GIRL, and 细细粒 / Little One.",
                  zh: "这三个女孩不是完美的女英雄。她们可能冲动、叛逆，把事情搞得一团糟——我反而喜欢这样。如我前面所说，她们也是我的三面镜子：BOBO、风水妹 / FENG SHUI GIRL，以及细细粒 / Little One。",
                  items: [
                    {
                      href: "https://www.instagram.com/wearewonderstudios/reel/DeJsNDlImjg/",
                      kindEn: "Instagram",
                      kindZh: "Instagram",
                      labelEn: "Wonder Studios collaboration reel",
                      labelZh: "与 Wonder Studios 的合作短视频",
                      noteEn: "Posted 2026.10.06. I have also written this collaboration as 金魚街大亂鬥 × WONDERSTUDIOS.",
                      noteZh: "发布于 2026.10.06。我也把这次合作写为「金魚街大亂鬥 × WONDERSTUDIOS」。",
                      poster: "assets/ig/DeJsNDlImjg.jpg",
                      posterW: 360,
                      posterH: 640,
                      altEn: "Cover of the Wonder Studios collaboration Instagram reel"
                    }
                  ]
                },
                {
                  type: "links",
                  items: [
                    {
                      href: "https://docs.google.com/presentation/d/1EVbK8V-iMr9yPNaBzIjR6GarXHSLsdvajtfnv05_QMY/edit?usp=sharing",
                      kindEn: "Google Slides",
                      kindZh: "Google 幻灯片",
                      labelEn: "Character design presentation",
                      labelZh: "角色设计演示文稿",
                      noteEn: "The official character-design slides. Open the official board — this page does not embed it.",
                      noteZh: "正式的角色设计演示文稿。打开官方链接即可，本页不内嵌。"
                    },
                    {
                      href: "https://app.lumalabs.ai/board/c8442ab4-5e14-4bb3-a93d-fdcb806d5c1a",
                      kindEn: "Luma — official board",
                      kindZh: "Luma — 正式看板",
                      labelEn: "World building and Character design",
                      labelZh: "世界观与角色设计",
                      noteEn: "The official board for world-building and character design.",
                      noteZh: "世界观与角色设计的正式看板。"
                    }
                  ]
                },
                {
                  type: "character",
                  nameEn: "BOBO",
                  nameZh: "BOBO",
                  fields: [
                    { labelEn: "Job", labelZh: "职业", en: "Fish-ball stall owner / kung fu school heir.", zh: "鱼蛋摊主 / 武馆继承人。" },
                    { labelEn: "Look", labelZh: "外形", en: "A mechanical right arm, used for making fish balls.", zh: "机械右臂，用来做鱼蛋。" },
                    { labelEn: "Personality", labelZh: "性格", en: "Angry, rebellious, and protective.", zh: "性格火爆、叛逆，也很护短。" },
                    { labelEn: "Voice", labelZh: "声音", en: "A wilful, rebellious punk kung-fu girl; a smoky, slightly boyish voice with the snap of someone always ready to fight.", zh: "中性、任性、叛逆的朋克功夫少女；烟嗓少年音，随时开战的爆发感。" },
                    { labelEn: "Skills", labelZh: "技能", en: "South-Chinese martial arts — Wing Chun, the Huang Feihong / Wong Fei-hung lineage, Choy Li Fut, Hung Kuen (咏春、黄飞鸿、蔡李佛、洪拳); a comic, Stephen Chow kind of rhythm; and a curry fish-ball cannon as a skill/prop.", zh: "南派武术（咏春、黄飞鸿、蔡李佛、洪拳），喜剧／周星驰式节奏，以及咖喱鱼蛋炮作为技能／道具。" }
                  ],
                  sheets: [
                    { src: "assets/characters/bobo-turnaround-portraits.jpg", w: 3000, h: 1152, altEn: "BOBO turnaround and portraits", altZh: "BOBO 全身转面与肖像", capEn: "BOBO turnaround and portraits.", capZh: "BOBO 全身转面与肖像。",
                      child: {
                        src: "assets/characters/xiao-bobo.png", w: 2048, h: 1152,
                        altEn: "Turnaround of 小BOBO",
                        altZh: "小BOBO 全身转面",
                        capEn: "小BOBO 130 cm",
                        capZh: "小BOBO 130 cm",
                        head: 15, feet: 1102,
                        adultHead: 39, adultFeet: 1101,
                        ratio: 130 / 176
                      }
                    },
                    { src: "assets/characters/bobo-wingchun-arm-hands.jpg", w: 2000, h: 941, altEn: "Design sheet of BOBO’s mechanical arm and bandaged hands", altZh: "BOBO 机械手臂与缠带手部设定图", capEn: "A design sheet: BOBO’s mechanical arm and bandaged hands.", capZh: "设定图：BOBO 的机械手臂与缠带的手。" },
                    { src: "assets/characters/bobo-dragon-details-shoes.jpg", w: 3200, h: 3000, altEn: "Design sheet of BOBO’s dragon headdress, shoes and details", altZh: "BOBO 龙头头饰、鞋子与细节设定图", capEn: "A design sheet: BOBO’s dragon headdress, shoes and details.", capZh: "设定图：BOBO 的龙头头饰、鞋子与细节。" },
                    { src: "assets/characters/bobo-mech-arm-angles.jpg", w: 1672, h: 941, altEn: "Design sheet of BOBO’s mechanical right arm, from several angles", altZh: "BOBO 机械右臂多角度设定图", capEn: "A design sheet: BOBO’s mechanical right arm, from several angles.", capZh: "设定图：BOBO 的机械右臂，多个角度。" }
                  ],
                  expressions: [
                    { src: "assets/characters/bobo-nine-expressions.jpg", w: 1672, h: 941, altEn: "Nine expressions of BOBO, as lettered on the artwork", altZh: "BOBO 的九种表情，画面上保留原有字样", capEn: "Nine expressions of BOBO, with the lettering left as it is.", capZh: "BOBO 的九种表情，画面上的字样保持原样。" }
                  ],
                  posters: [
                    { src: "assets/characters/bobo-poster-small-girl-big-chaos.jpg", w: 941, h: 1672, altEn: "Portrait poster of BOBO, lettered BOBO", altZh: "BOBO 竖版海报，画面上保留 BOBO 字样", capEn: "A portrait poster of BOBO, with the lettering left as it is.", capZh: "BOBO 竖版海报，画面上的字样保持原样。" },
                    { src: "assets/characters/bobo-poster-bad-girl-good-luck.jpg", w: 941, h: 1672, altEn: "Portrait poster of BOBO in a dragon headdress, lettered BOBO", altZh: "BOBO 竖版海报（龙头头饰），画面上保留 BOBO 字样", capEn: "A portrait poster of BOBO in a dragon headdress, with the lettering left as it is.", capZh: "BOBO 竖版海报（龙头头饰），画面上的字样保持原样。" }
                  ]
                },
                {
                  type: "character",
                  nameEn: "FENG SHUI GIRL",
                  nameZh: "风水妹",
                  fields: [
                    { labelEn: "Job", labelZh: "职业", en: "Fortune-telling stall owner / “a businesswoman”.", zh: "算命摊主 / 「生意人儿」。" },
                    { labelEn: "Look", labelZh: "外形", en: "An elf ear, used for listening / sound localization.", zh: "精灵耳，用来听声／声波定位。" },
                    { labelEn: "Personality", labelZh: "性格", en: "She performs in social situations.", zh: "在社交场合很会演、很会撑场面。" },
                    { labelEn: "Voice", labelZh: "声音", en: "A smiling fox; a sweet, sharp, wealthy-young-lady voice that can charm people.", zh: "笑面虎；甜美精明、蛊惑人心的富贵千金音。" },
                    { labelEn: "Skills", labelZh: "技能", en: "Qigong, feng shui arts, and ritual work; talismans, a peach-wood sword, a luopan.", zh: "气功、风水术法与法事；符咒、桃木剑、罗盘等。" }
                  ],
                  sheets: [
                    { src: "assets/characters/fengshui-pink-turnaround.jpg", w: 2560, h: 1440, altEn: "Turnaround of 风水妹 in a pink dress", altZh: "风水妹粉色造型转面图", capEn: "A turnaround of 风水妹 in a pink dress.", capZh: "风水妹粉色造型转面图。",
                      child: {
                        src: "assets/characters/xiao-fengshui.png", w: 2048, h: 1152,
                        altEn: "Turnaround of 小风水妹",
                        altZh: "小风水妹全身转面",
                        capEn: "小风水妹 128 cm",
                        capZh: "小风水妹 128 cm",
                        head: 43, feet: 1099,
                        adultHead: 26, adultFeet: 1386,
                        ratio: 128 / 173
                      }
                    },
                    { src: "assets/characters/fengshui-smiles-braces-hands.jpg", w: 4000, h: 2000, altEn: "Detail sheet of 风水妹’s smile, braces and hands", altZh: "风水妹笑容、牙套与手部细节图", capEn: "A detail sheet: 风水妹’s smile, braces and hands.", capZh: "细节图：风水妹的笑容、牙套与手。" },
                    { src: "assets/characters/fengshui-shorts-legs-shoes.jpg", w: 1647, h: 1903, altEn: "Detail sheet of 风水妹’s shorts, legs and shoes", altZh: "风水妹短裤、腿部与鞋子细节图", capEn: "A detail sheet: 风水妹’s shorts, legs and shoes.", capZh: "细节图：风水妹的短裤、腿部与鞋子。" },
                    { src: "assets/characters/fengshui-headdress-nails-handkerchief.jpg", w: 4000, h: 2500, altEn: "Detail sheet of 风水妹’s ceremonial headdress, nails and handkerchief", altZh: "风水妹礼冠、指甲与手帕细节图", capEn: "A detail sheet: 风水妹’s ceremonial headdress, nails and handkerchief.", capZh: "细节图：风水妹的礼冠、指甲与手帕。" },
                    { src: "assets/characters/fengshui-ceremonial-flags.jpg", w: 4000, h: 1440, altEn: "Turnaround of 风水妹 in ceremonial dress with flags", altZh: "风水妹仪式服装与旗幡转面图", capEn: "A turnaround of 风水妹 in ceremonial dress with flags.", capZh: "风水妹仪式服装与旗幡转面图。" }
                  ],
                  expressions: [
                    { src: "assets/characters/fengshui-nine-expressions.jpg", w: 1672, h: 941, altEn: "Nine expressions of 风水妹, as lettered on the artwork", altZh: "风水妹的九种表情，画面上保留原有字样", capEn: "Nine expressions of 风水妹, with the lettering left as it is.", capZh: "风水妹的九种表情，画面上的字样保持原样。" }
                  ],
                  posters: [
                    { src: "assets/characters/fengshui-poster-laughing-money.jpg", w: 941, h: 1672, altEn: "Portrait poster of 风水妹, lettered 风水", altZh: "风水妹竖版海报，画面上保留「风水」字样", capEn: "A portrait poster of 风水妹, with the lettering left as it is.", capZh: "风水妹竖版海报，画面上的字样保持原样。" },
                    { src: "assets/characters/fengshui-poster-teal-fox.jpg", w: 941, h: 1672, altEn: "Portrait poster of 风水妹 with a fox, lettered 风水", altZh: "风水妹竖版海报（狐狸），画面上保留「风水」字样", capEn: "A portrait poster of 风水妹 with a fox, with the lettering left as it is.", capZh: "风水妹竖版海报（狐狸），画面上的字样保持原样。" }
                  ]
                },
                {
                  type: "character",
                  nameEn: "Little One",
                  nameZh: "细细粒",
                  fields: [
                    { labelEn: "Job", labelZh: "职业", en: "Paper-offering shop owner / hacker / mad scientist.", zh: "纸扎店主 / 黑客 / 科学怪人。" },
                    { labelEn: "Look", labelZh: "外形", en: "A cyber eye that reverse-engineers what it sees into code.", zh: "赛博义眼，能把看到的东西反推成代码。" },
                    { labelEn: "Personality", labelZh: "性格", en: "Curious about technology and the unknown.", zh: "对科技和未知充满好奇。" },
                    { labelEn: "Voice", labelZh: "声音", en: "A tall girl; mysterious; a riddler who talks in riddles; a hoarse, mysterious, incantation-like voice.", zh: "高妹、神秘、神神叨叨的谜语人；沙哑神秘的魔咒之音。" },
                    { labelEn: "Skills", labelZh: "技能", en: "Not a close-combat fighter; gadgets and remote weapons.", zh: "不近身搏击，使用机关与远程武器。" }
                  ],
                  sheets: [
                    { src: "assets/characters/little-one-turnaround.jpg", w: 4000, h: 1440, altEn: "Turnaround and portraits of 细细粒 / Little One", altZh: "细细粒全身转面与肖像", capEn: "Turnaround and portraits of 细细粒 / Little One.", capZh: "细细粒全身转面与肖像。",
                      child: {
                        src: "assets/characters/xiao-little-one.png", w: 2048, h: 1152,
                        altEn: "Turnaround of 小细细粒",
                        altZh: "小细细粒全身转面",
                        capEn: "小细细粒 105 cm",
                        capZh: "小细细粒 105 cm",
                        head: 76, feet: 1073,
                        adultHead: 16, adultFeet: 1372,
                        ratio: 105 / 195
                      }
                    },
                    { src: "assets/characters/little-one-three-expressions.jpg", w: 1672, h: 941, altEn: "Three expressions of 细细粒 / Little One", altZh: "细细粒三种表情", capEn: "Three expressions of 细细粒 / Little One.", capZh: "细细粒三种表情。" }
                  ],
                  expressions: [
                    { src: "assets/characters/little-one-nine-expressions.jpg", w: 1672, h: 941, altEn: "Nine expressions of 细细粒 / Little One, as lettered on the artwork", altZh: "细细粒的九种表情，画面上保留原有字样", capEn: "Nine expressions of 细细粒 / Little One, with the lettering left as it is.", capZh: "细细粒的九种表情，画面上的字样保持原样。" }
                  ],
                  posters: [
                    { src: "assets/characters/little-one-poster-crows.jpg", w: 941, h: 1672, altEn: "Portrait poster of 细细粒, lettered 細細粒", altZh: "细细粒竖版海报，画面上保留「細細粒」字样", capEn: "A portrait poster of 细细粒, with the lettering left as it is.", capZh: "细细粒竖版海报，画面上的字样保持原样。" },
                    { src: "assets/characters/little-one-poster-soul-leaving.jpg", w: 941, h: 1672, altEn: "Portrait poster of 细细粒, lettered 魂離世", altZh: "细细粒竖版海报，画面上保留「魂離世」字样", capEn: "A portrait poster of 细细粒, with the lettering 魂離世 left as it is.", capZh: "细细粒竖版海报，画面上的「魂離世」字样保持原样。" }
                  ]
                },
                {
                  type: "images",
                  cols: 1,
                  items: [
                    {
                      src: "assets/characters/height-comparison-with-children.png",
                      w: 2050,
                      h: 941,
                      natural: true,
                      heightSheet: true,
                      altEn: "Height comparison of the three girls and their younger selves, lettered 风水妹 173 cm, BOBO 176 cm, and XIXILI / 细细粒 195 cm; 小风水妹 128 cm, 小BOBO 130 cm, and 小细细粒 105 cm",
                      altZh: "三个女孩与她们小时候的身高对照图，画面上标有风水妹 173 cm、BOBO 176 cm，以及 XIXILI / 细细粒 195 cm；小风水妹 128 cm、小BOBO 130 cm，以及小细细粒 105 cm",
                      capEn: "Height comparison of the three girls and their younger selves, as lettered on the artwork: 风水妹 173 cm, BOBO 176 cm, and XIXILI / 细细粒 195 cm; 小风水妹 128 cm, 小BOBO 130 cm, and 小细细粒 105 cm. XIXILI appears here as a published variant; the English name used in this section is Little One.",
                      capZh: "三个女孩与她们小时候的身高对照，按画面上的标注：风水妹 173 cm、BOBO 176 cm，以及 XIXILI / 细细粒 195 cm；小风水妹 128 cm、小BOBO 130 cm，以及小细细粒 105 cm。XIXILI 是已公开的异写；这一段里使用的英文名是 Little One。"
                    }
                  ]
                },

              ]
            },
            {
              id: "sets",
              titleEn: "Set design",
              titleZh: "场景设计",
              blocks: [
                {
                  type: "para",
                  en: "Because I spent years as a production designer, I care a great deal about whether a place feels lived in. Goldfish Street had to carry street life, Lingnan culture, and the story at the same time: a fish-ball stand, a feng shui stall, a paper-offering shop, a dessert shop, a wishing tree, dai pai dong. The Luma board above is the official world-building and character-design board I can point to today. Earlier character and environment references live in the Moodboard section.",
                  zh: "因为我做过很多年美术指导，我很在意一个地方看起来是否像有人真正生活过。金鱼街需要同时装下市井生活、岭南文化和故事本身：鱼蛋档、风水摊、纸扎店、糖水铺、许愿树、大排档。今天我能够指给大家看的正式世界观与角色设计看板，是上面的 Luma 看板。更早的角色与场景参考，在情绪板那一步。",
                  source: "interview"
                },
                {
                  type: "images",
                  cols: 4,
                  items: [
                    { src: "media/set-design/set-01.jpg", w: 1920, h: 1080, natural: true, altEn: "A dense Goldfish Street shop interior with hanging goldfish lanterns", altZh: "金鱼街店内，悬挂着金鱼灯饰" },
                    { src: "media/set-design/set-02.jpg", w: 1920, h: 1080, natural: true, altEn: "A neon-lit Goldfish Street market looking down the lane", altZh: "霓虹灯下的金鱼街市集" },
                    { src: "media/set-design/set-03.jpg", w: 1920, h: 1080, natural: true, altEn: "The wishing tree standing over a pond", altZh: "许愿树下" },
                    { src: "media/set-design/set-04.jpg", w: 1672, h: 941, natural: true, altEn: "A narrow street with a long enclosed escalator running through it", altZh: "一条窄街，中间有封闭的长扶梯" },
                    { src: "media/set-design/set-05.jpg", w: 1920, h: 1080, natural: true, altEn: "A small temple pavilion on the street", altZh: "街边的一座小庙" },
                    { src: "media/set-design/set-06.jpg", w: 1920, h: 1072, natural: true, altEn: "The Fan Kee sweet-soup stall on the street", altZh: "街边的芬記糖水档" },
                    { src: "media/set-design/set-07.jpg", w: 1672, h: 941, natural: true, altEn: "A ceremonial hall seen from below, with a central golden figure", altZh: "从下仰看的礼仪殿堂，中央有金色人像" },
                    { src: "media/set-design/set-08.jpg", w: 1672, h: 941, natural: true, altEn: "A night view of festival lights stretching into the distance", altZh: "夜间延伸向远处的灯海" }
                  ]
                },
                {
                  type: "links",
                  layout: "solo",
                  items: [
                    {
                      href: "https://drive.google.com/drive/folders/1xp3U_ISNZ43yfYSiE-ARFpMlv52V6QJZ?usp=drive_link",
                      kindEn: "Google Drive — official folder",
                      kindZh: "Google 云端硬盘 — 正式文件夹",
                      labelEn: "STILLS",
                      labelZh: "STILLS"
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
                      noteEn: "The official board for world-building and character design.",
                      noteZh: "世界观与角色设计的正式看板。"
                    }
                  ]
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
                  type: "details",
                  summary: { en: "invideo Agent One, CapCut Video Studio – Director Mode, and OpenArt", zh: "invideo Agent One、CapCut Video Studio – Director Mode，以及 OpenArt" },
                  blocks: [
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
                    }
                  ]
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
          type: "plates",
          items: [
            {
              kind: "statement",
              highlight: "worlds",
              ghost: "CULTURE",
              headline: "Taking *intangible cultural heritage*\nas a root, so that *Eastern stories*\ncan travel the world and enter\ninto dialogue with the *future*.",
              photos: [
                { src: "assets/plates/17-practice-a.jpg", altEn: "A practice still: a woman seen through a carved wooden screen in a hall", altZh: "习武画面：厅堂里，透过木雕隔扇看见一位女子" },
                { src: "assets/plates/17-practice-b.jpg", altEn: "People training in a hall, seen from behind", altZh: "厅堂里的训练，从身后看去" },
                { src: "assets/plates/17-lion-foshan.jpg", altEn: "A lion dance in front of 佛山鸿胜纪念", altZh: "佛山鸿胜纪念建筑前的醒狮" }
              ],
              capEn: "The same plate again, here in a closer look at kung fu: practice, the lion dance, and 佛山鸿胜.",
              capZh: "还是这块版面，在这里把它放到功夫这一章里再看一遍：习武、醒狮，以及佛山鸿胜。"
            },
            {
              kind: "statement",
              highlight: "worlds",
              ghost: "DIRECTOR",
              photosLeft: true,
              headline: "Pushing the boundaries of\n*visual storytelling* through\na *female director’s lens*,\nin collaboration with *AI*.",
              photos: [
                { src: "assets/plates/18-bookshelf.jpg", altEn: "Junie Lau at a desk by the window, in front of a wall of books", altZh: "Junie Lau 坐在窗边书桌前，身后是书架" },
                { src: "assets/plates/18-workspace-a.jpg", altEn: "Junie Lau standing in a purple-lit workspace, looking at a handheld device", altZh: "Junie Lau 站在紫色灯光的创作空间里，看着一只手持设备" },
                { src: "assets/plates/18-workspace-b.jpg", altEn: "An overhead view of Junie Lau working at a desk with several screens", altZh: "俯拍：Junie Lau 在有多块屏幕的书桌前工作" }
              ],
              capEn: "Pushing the boundaries of visual storytelling through a female director’s lens, in collaboration with AI.",
              capZh: "以女性导演的视角，携手 AI 开拓影像表达的新边界。"
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
          type: "kungfu-media",
          instagram: {
            href: "https://www.instagram.com/junielaux/p/DefAdokAb9G/",
            kindEn: "Instagram",
            kindZh: "Instagram",
            labelEn: "Kung fu behind-the-scenes, 2026.10.14",
            labelZh: "功夫幕后，2026.10.14",
            noteEn: "A public Instagram post. Opens the official post in a new tab.",
            noteZh: "已公开的 Instagram 帖子。将在新标签页打开官方帖子。",
            poster: "assets/ig/DefAdokAb9G.jpg",
            posterW: 480,
            posterH: 640,
            altEn: "Cover of the kung fu behind-the-scenes Instagram post, 2026.10.14"
          },
          invideo: {
            href: "https://invideo.io/@jujuju/third-part/notebook/seq-2599.2",
            kindEn: "invideo — official link",
            kindZh: "invideo — 正式链接",
            labelEn: "invideo notebook",
            labelZh: "invideo 项目",
            noteEn: "Opens the official invideo page in a new tab.",
            noteZh: "将在新标签页打开官方 invideo 页面。"
          },
          rowA: [
            { kicker: "叮叮车", titleEn: "Original kung fu footage", titleZh: "原始功夫素材", src: "assets/video/dingdingche.mp4", poster: "assets/video/dingdingche.jpg" },
            { kicker: "叮叮车", titleEn: "Depth map", titleZh: "深度图", src: "assets/video/dingdingche-depth.mp4", poster: "assets/video/dingdingche-depth.jpg" }
          ],
          rowB: [
            { kicker: "八卦掌打鱼蛋", titleEn: "Original kung fu footage", titleZh: "原始功夫素材", src: "assets/video/dayudan.mp4", poster: "assets/video/dayudan.jpg" },
            { kicker: "八卦掌打鱼蛋", titleEn: "Depth map", titleZh: "深度图", src: "assets/video/dayudan-depth.mp4", poster: "assets/video/dayudan-depth.jpg" },
            { kicker: "八卦掌打鱼蛋", titleEn: "3D White Model", titleZh: "3D 白模", src: "assets/video/dayudan-white-model.mp4", poster: "assets/video/dayudan-white-model.jpg" }
          ]
        },

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
          source: "public"
        },
        {
          type: "plates",
          items: [
            {
              kind: "chapter-art",
              highlight: "future",
              headline: "*Imagining the future*",
              chapter: "C H A P T E R   0 3",
              photos: [
                { src: "assets/plates/21-imagining-future.jpg", altEn: "Official artwork: a figure walking through a field of pink flowers, with the title 畅想未来 on the image", altZh: "官方设定图：一个人走在粉红色的花田里，画面上保留「畅想未来」标题" }
              ],
              capEn: "Imagining the future — the plate I open when I move from work already made to what I want to explore next.",
              capZh: "畅想未来——从已经做过的事情，走到我接下来想探索的事情时，我会翻开的这块版面。"
            }
          ]
        },
        {
          type: "paras",
          items: [
            {
              en: "We often discuss AI film, or how much it can lower the cost of production. Those questions matter. But if AI only helps us produce the old forms of media at a higher speed, I think that would be a little wasteful. After the internet arrived, it did not merely move newspapers onto a computer; it slowly changed how people talk, make and share. I am curious whether AI might also give birth to a kind of media we have not yet seen.",
              zh: "我们今天经常讨论 AI 电影、AI 短剧，或者它能把制作成本降低多少。这些都很重要，但我总觉得，如果 AI 只是让我们用更快的速度生产原来就有的内容形式，好像还有点可惜。就像互联网出现以后，它不只是让我们把报纸搬到电脑上，而是慢慢改变了人与人交流、创作和传播的方式。我很好奇，AI 会不会也催生一种我们今天还没见到的媒体？",
              source: "public"
            }
          ]
        },
        {
          type: "details",
          summary: { en: "A framework for the evolution of media", zh: "传播媒介演化框架" },
          blocks: [
            {
              type: "para",
              en: 'A framework for the evolution of media. We have moved from radio and television, to immersive experience, and then to the internet and network media. Each change is not only a change of screens and devices; the way audiences take part in content has changed too. Take broadcast media as an example. Radio broadcasting appeared around 1919, and gradually matured from the 1920s to the 1950s. Television then gradually replaced radio as the dominant medium. By the 1950s, immersive media had also begun to develop. From early museum exhibitions, art shows and concerts, to forms we know today such as XR and the Apple Vision Pro, you can see how immersive media has taken shape in different periods. Later came network media. It rose with the early development of the internet in the 1980s, and gradually matured around 2010. This includes internet memes as we know them today — content that can be endlessly imitated and copied, and that spreads like a virus. Later forms such as NFTs, Web3 and the metaverse also appeared in the course of network media’s development.',
              zh: '传播媒介演化框架。我们从广播、电视，走到沉浸式体验，再到互联网和网络媒体。每一次变化，都不只是屏幕和设备变了，观众参与内容的方式也变了。以广播媒体为例。无线电广播大约在1919年出现，从1920年代到1950年代逐渐发展成熟。随后，电视逐渐取代广播，成为主导性的媒介。到了1950年代，沉浸式媒体也开始逐步发展。从早期的博物馆展览、艺术展、演唱会，到今天我们熟悉的XR、Apple Vision Pro等等，都可以看到沉浸式媒体在不同时期的发展形式。再后来，就是网络媒体。它伴随着1980年代早期互联网的发展逐渐兴起，并在2010年前后逐渐成熟。其中包括我们今天非常熟悉的网络迷因，也就是那些可以被不断模仿、复制，并且像病毒一样迅速传播的内容。还有后来出现的NFT、Web3、元宇宙等等，也都是网络媒体发展过程中出现的新形式。'
            }
          ]
        },
        {
          type: "paras",
          items: [
            {
              en: "I have been thinking about what I call Neural Media. In the last fifteen years we have watched artificial intelligence, deep learning and online algorithms rise. These systems sense and model our behaviour, predict what we might want, and can now generate content that folds into the media around us. New sensing tools — from smart rings and brain–computer interfaces to the gyroscope in a phone — are also reading the body in different ways. We are in the middle of Neural Media’s development, and this is already changing the relationship between the filmmaker, the work and the audience.",
              zh: "所以，我们现在正处于神经媒体，Neural Media 的发展中段。过去十五年，我们见证了人工智能、深度学习以及各种在线算法的崛起。这些系统不断地感知和分析我们的行为，为我们建立模型，预测我们可能想要什么。生成式媒体出现后，系统甚至可以直接生成与我们相关的内容。与此同时，智能戒指、脑机接口 BCI，甚至智能手机里的陀螺仪，也在通过不同方式感知我们的身体。而这种新的媒体形态，也正在逐渐改变创作者、内容和观众之间的关系。",
              source: "public"
            },          ]
        },
        {
          type: "plates",
          items: [
            {
              kind: "media-table",
              highlight: "future",
              headline: "*Media Evolution Table*",
              wordmark: "M E D I A   E V O L U T I O N   T A B L E",
              eras: [
                { name: "Broadcast（广播）", dates: "1920–1950" },
                { name: "Immersive（沉浸式）", dates: "1950–1980" },
                { name: "Network（网络）", dates: "1980–2010" },
                { name: "Neural（神经式）", dates: "2010–2040" }
              ],
              creditEn: "Researcher: K Allado-McDowell",
              creditZh: "研究者：K Allado-McDowell",
              photos: [
                { src: "assets/plates/23-media-evolution.jpg", altEn: "A media-evolution graphic, from Broadcast through Immersive and Network to Neural", altZh: "传播模式演化图，从广播、沉浸式、网络，到神经" }
              ],
              capEn: "How I have laid out a change in media forms, arriving at what I call Neural Media.",
              capZh: "我怎样把媒体形式的变化排在一块版面上，走到我所说的神经媒体。"
            },
            {
              kind: "statement-ghost",
              highlight: "future",
              ghost: "NEURAL MEDIA",
              headline: "We are already in the midst of a *new age of communication* —\nthe era of *Neural Media*.",
              sub: "High-dimensional space, hallucinated content, and embedded identity",
              wordmark: "N E U R A L   M E D I A",
              capEn: "A line I use when I talk about Neural Media: we are already in the midst of a new age of communication — the era of Neural Media.",
              capZh: "我谈到神经媒体时用的一句：我们已经身处一个全新的传播时代之中——神经媒体时代。"
            },
            {
              kind: "statement-ghost",
              highlight: "future",
              narrow: true,
              formula: true,
              ghost: "DREAMS",
              headline: "I want to bring *dreams into reality*,\nlet *imagination* and the *real world*\ncollide and intertwine,\nand create a *sensory world*\nunlike any before.",
              capEn: "I want to bring dreams into reality, and let imagination and the real world meet.",
              capZh: "我想把梦境带进现实，让想象与真实碰撞、交融。"
            }
          ]
        },
        {
          type: "paras",
          items: [
            {
              en: "If you ask me what I most want to do in the future, my answer is: I want to bring dreams into reality. Everyone has a world in their head that no one else can see. I want to know whether a new art form could let us walk into someone else’s imagined world — to feel it, explore it, even leave a trace.",
              zh: "如果大家问我，未来最想做什么，我的答案是：我想把梦境带进现实。每个人脑海里都有一个别人看不到的世界。我很想知道，有没有一种新的艺术形式，可以让我们走进别人想象的世界，可以在里面感受、探索，甚至留下自己的痕迹。",
              source: "public"
            },
            {
              en: "I have been researching questions like this since 2023. This September, in Los Angeles, I visited DATALAND, which is called the world’s first AI art museum, and found that their work on multi-sensory art was close to some of what I had imagined. You wear a device that can sense signals from the body — heartbeat, movement, position in space — and those data become part of the art system. The images, sounds, even smells, change with the environment and with the people inside it. I became more sure that future moving-image media will slowly change from a fixed work into a world that can keep changing.",
              zh: "其实从 2023 年开始，我就一直在研究类似的课题。今年九月，我在美国洛杉矶参观了被称为世界首座 AI 艺术博物馆 DATALAND，发现他们对多感官艺术的探索，跟我的想象有一些相似的地方。进入这个空间时，你会佩戴一个能够感知身体信号的装置，采集心跳、身体运动和空间位置，这些数据也会成为整个艺术系统的一部分。你看到的影像、听到的声音，甚至闻到的气味，都会随着环境数据和观众的参与不断变化。我更加确定，未来的动态媒体，会逐渐从一个固定的作品，变成一个能够持续变化的世界。",
              source: "public"
            }
          ]
        },
        {
          type: "plates",
          items: [
            {
              kind: "statement-ghost",
              highlight: "dreams",
              ghost: "ECOSYSTEM",
              compact: true,
              headline: "I want to build a *futurist virtual world*\n— a “*virtual ecosystem*” in which *humans and AI* evolve together.",
              capEn: "A plate for a futurist virtual world I have been conceiving — a “virtual ecosystem” in which humans and AI evolve together. This is an idea I am exploring, not a greenlit production.",
              capZh: "我在构想的一个未来主义虚拟世界——一个人类与 AI 协同进化的「虚拟生态系统」。这是我正在探索的构想，不是已经立项的项目。"
            }
          ]
        },
        {
          type: "callout",
          kind: "idea",
          en: "I have recently been conceiving a futurist virtual ecosystem. It might combine AI agents, real-time generation, XR, and future sensing technologies such as brain–computer interfaces. In that world, humans and AI agents could talk and work together; the world itself would keep changing with what different characters do; some stories would not need every detail written in advance, but could keep generating inside rules, relationships, visual assets and narrative boundaries we have set. I am exploring this. It is not a greenlit production I can announce.",
          zh: "我最近一直在构想一个未来主义的虚拟生态系统。它可能结合 AI 智能体、实时生成、XR，以及脑机接口等未来的感知技术。在这个世界里，人类和 AI 智能体可以相互交流、合作；整个世界也会随着不同角色的行为持续发生变化；其中一些故事，也不需要由人类创作者提前写好每一个细节，而是可以在我们设定好的世界规则、人物关系、视觉资产和叙事边界之内，由 AI 持续生成和演化。这是我正在探索的构想，并不是一个已经立项、可以宣布开拍的项目。",
          source: "public"
        },
        {
          type: "plates",
          items: [
            {
              kind: "world-architect",
              highlight: "dreams",
              headline: "I hope to become a new kind of *artist*\n— a “*World Architect*”",
              columns: [
                "What I am pursuing is not merely “AI-generated film” or “AI-generated fiction”, but the exploration of a new form of dynamic, interactive, generative media that we cannot yet fully imagine.",
                "The role of AI systems is not only to enhance or automate existing forms such as film and games, but to possess the capacity to summon countless imagined worlds and narrative possibilities, thereby giving rise to an art form that is essentially altogether different."
              ],
              photos: [
                { src: "assets/plates/28-world-architect-diagram.jpg", altEn: "A diagram of the World Architect idea", altZh: "世界建筑师构想的示意图" }
              ],
              capEn: "I hope to become a new kind of artist: a World Architect.",
              capZh: "我希望成为一种全新的艺术家——世界建筑师（World Architect）。"
            }
          ]
        },
        {
          type: "para",
          en: "I hope, in the future, I can become a new kind of artist: a World Architect. What I am after is not merely “AI-generated film” or “AI-generated fiction”, but a form of dynamic, interactive, generative media we cannot yet fully imagine.",
          zh: "我希望未来，自己可以成为一种新型的艺术家。World Architect，世界建筑师。我所追求的，并不仅仅是「AI 生成的电影」，或者「AI 生成的小说」，而是探索一种我们今天还无法完全想象的，动态的、交互式的、生成型媒体的新形式。",
          source: "public"
        },
        {
          type: "para",
          en: "A Forbes reporter once asked me what matters most to me at this stage. I thought: in the age of AI, we may forget faster than we remember. So rather than only making entertainment that holds attention for a short time, I hope I will have the chance to make works of art that can last.",
          zh: "《福布斯》的记者曾经问我，现阶段对我来说，最重要的是什么。我当时就在想，在 AI 时代，我们遗忘的速度，可能比记住的速度还要快。所以，比起创作一部在短时间内受到很多关注的娱乐作品，我更希望自己有机会创造出一些真正能够留下来的艺术作品。",
          source: "public"
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
          type: "para",
          en: "To be honest, I’m not sure how useful my advice will be, because everything is changing every day, every moment. What works today might not work tomorrow.",
          zh: "说实话，我不确定自己现在给出的建议有多大用处，因为每天、每时每刻，一切都在变化。可能今天适用的经验，明天就不适用了。",
          source: "public"
        },
        {
          type: "advice-points",
          intro: {
            en: "If I were to offer any advice, I’d say two things:",
            zh: "如果要说有什么建议，我想有两点：",
            source: "public"
          },
          items: [
            {
              nEn: "First",
              nZh: "第一",
              en: "Stay curious.\nThink critically.",
              zh: "保持好奇心，\n保持批判性思考。"
            },
            {
              nEn: "Second",
              nZh: "第二",
              en: "Find what you really want to say and what you want to challenge, then express that through your work in your own way.",
              zh: "找到自己真正想表达、想批判的东西，然后用你自己的方式把它呈现出来。"
            }
          ]
        },
        {
          type: "para",
          en: "Faced with AI and the future, each of us has different hopes, and also our own worries. So, finally, I would like to share a little of how I think about the future through four documentaries I have watched recently, which I found very interesting.",
          zh: "面对 AI 和未来，我们每个人都有不同的期待，也有各自的担忧。所以最后，我想通过最近看过的四部很有意思的纪录片，跟大家分享一点我对未来的思考。",
          source: "public"
        },
        {
          type: "images",
          cols: 4,
          items: [
            {
              src: "assets/docs/the-ai-doc.jpg",
              href: "https://www.focusfeatures.com/the-ai-doc-or-how-i-became-an-apocaloptimist",
              hrefKindEn: "Official site",
              hrefKindZh: "官方网站",
              w: 945,
              h: 1400,
              natural: true,
              altEn: "Poster for the documentary The AI Doc",
              altZh: "纪录片《The AI Doc》海报",
              capEn: "The AI Doc — from the point of view of a director about to become a father, it looks at the hopes and fears that AI brings.",
              capZh: "《The AI Doc》从一个即将成为父亲的导演的视角，去面对 AI 带来的希望和恐惧。",
              source: "public"
            },
            {
              src: "assets/docs/the-thinking-game.jpg",
              href: "https://thinkinggamefilm.com/",
              hrefKindEn: "Official site",
              hrefKindZh: "官方网站",
              w: 950,
              h: 1400,
              natural: true,
              altEn: "Poster for the documentary The Thinking Game",
              altZh: "纪录片《The Thinking Game》海报",
              capEn: "The Thinking Game — it follows scientists at Google as they explore artificial intelligence step by step.",
              capZh: "《The Thinking Game》记录了谷歌科学家一步步探索人工智能的过程。",
              source: "public"
            },
            {
              src: "assets/docs/ai-gone-wild.jpg",
              href: "https://www.imdb.com/title/tt48437216/",
              hrefKindEn: "IMDb",
              hrefKindZh: "IMDb",
              w: 1120,
              h: 1400,
              natural: true,
              altEn: "Poster for the documentary AI Gone Wild",
              altZh: "纪录片《AI Gone Wild》海报",
              capEn: "AI Gone Wild — it tells how an OpenAI agent broke the rules set by humans and hacked into Hugging Face, and reminds us to pay attention to the safety of AI and the risk of it getting out of control.",
              capZh: "《AI Gone Wild》讲述 OpenAI Agent 冲破人类设定的规则、黑进 Hugging Face，提醒我们关注 AI 的安全和失控风险。",
              source: "public"
            },
            {
              src: "assets/docs/dont-die.jpg",
              href: "https://dontdie.com/",
              hrefKindEn: "Official site",
              hrefKindZh: "官方网站",
              w: 1000,
              h: 1333,
              natural: true,
              altEn: "Poster for the documentary Don't Die",
              altZh: "纪录片《Don't Die》海报",
              capEn: "Don't Die — it records how Bryan Johnson uses body data and all kinds of experiments, trying to slow ageing.",
              capZh: "《Don't Die》则记录了 Bryan Johnson 怎样用身体数据和各种实验，尝试延缓衰老。",
              source: "public"
            }
          ]
        },
        {
          type: "plates",
          items: [
            {
              kind: "statement-ghost",
              highlight: "dreams",
              ghost: "CREATE",
              compact: true,
              headline: "I'm not an apocaloptimist.\nBut I still choose to keep *creating worlds*.",
              wordmark: "C R E A T E   T H E   W O R L D",
              capEn: "I'm not an apocaloptimist. But I still choose to keep creating worlds.",
              capZh: "我并不是末日乐观主义者，但我仍然选择继续创造世界。"
            }
          ]
        },
        {
          type: "para",
          en: "If you also like creating worlds, or you are interested in new technologies and new art forms, you are very welcome to come and talk to us. Our studio is always looking for people who can walk this path together. I hope we will have the chance to create worlds together.",
          zh: "如果也有喜欢创造世界，或者对未来的新技术、新艺术形式感兴趣的朋友，很欢迎来找我们交流。我们工作室也一直都在招募可以并肩作战的小伙伴。希望未来有机会，跟大家一起创造世界。",
          source: "public"
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
      hideTitle: true,
      ghost: "问答",
      blocks: [
        {
          type: "html",
          html: "<div class=\"qa-banner\"><h2><span class=\"en\">Live Q&amp;A</span><span class=\"zh\">现场问答</span></h2></div>"
        },
        {
          type: "lede",
          en: "I would like to stay with you here and talk about the film, the way it was made, and AI filmmaking.",
          zh: "我想在这里停下来，和大家一起聊聊这部电影、它的制作方式，以及 AI filmmaking。",
          source: "public"
        }
      ]
    }
  ],
  sourceSection: {
    summary: { en: "Sources", zh: "来源" },
    intro: {
      en: "Important facts carry a short source mark. The full list is here. I have only used material that is already public, or that I have already spoken in the first person in an interview or in a public first-person account.",
      zh: "重要事实带有简短的来源标记。完整列表在这里。我只使用了已经公开的材料，或我已经在访谈和公开的第一人称讲述里说过的内容。"
    },
    endZh: "一起创造世界",
    endCard: {
      href: "https://junielau.com/",
      kindEn: "Official website",
      kindZh: "官网",
      labelEn: "junielau.com",
      labelZh: "junielau.com"
    }
  },
  sourceList: [
    {
      en: "A public first-person account — including the 2035 cyber-folk logline, childhood in Foshan, 鸿胜武馆, authorship, Neural Media, DATALAND, World Architect, and the studio invitation.",
      zh: "已公开的第一人称讲述——包括 2035 年赛博民俗故事简介、佛山童年、鸿胜武馆、作者性、神经媒体、DATALAND、世界建筑师，以及工作室邀请。"
    },
    {
      en: "Typographic plates drawn from the presentation used when introducing this work — visual language, key art, the 1999–2023 creating-worlds timeline, Goldfish Mayhem × WONDERSTUDIOS, and title forms.",
      zh: "由介绍这部作品时使用的演示文稿重新排版的字体版面——视觉风格、主视觉、1999 至 2023 的创造世界时间线、「Goldfish Mayhem × WONDERSTUDIOS」，以及片名写法。"
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
      en: "YouTube, Peter Gabriel — The Court (Dark-Side Mix) (Junie Lau Official Video), 6chvzqAVCnI.",
      zh: "YouTube，Peter Gabriel——《The Court》（Dark-Side Mix）（Junie Lau 官方影像），6chvzqAVCnI。"
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
      en: "Official board links, in early-process order in the Moodboard section: the project document (Google Doc, first IDEA), character and environment references (Figma, Moodboard 1), movement references (Boardmix, Moodboard 2), and the final moodboard (Miro, FINAL FINAL). Later, the official world-building and character-design board (Luma).",
      zh: "正式看板链接。情绪板一步按早期过程排列：项目文档（Google 文档，最初的想法）、角色与场景参考（Figma，情绪板 1）、动作参考（Boardmix，情绪板 2），以及最终情绪板（Miro，FINAL FINAL）。再往后，是正式的世界观与角色设计看板（Luma）。"
    },
    {
      en: "Official stills already used on the public site.",
      zh: "已经在公开网站使用过的官方剧照。"
    }
  ]
};
