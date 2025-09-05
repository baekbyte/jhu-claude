import React, { useState, useEffect, useRef } from 'react';
import './Terminal.css';

const Terminal = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [currentUser] = useState('guest@claude-jhu');
  const inputRef = useRef(null);
  const terminalRef = useRef(null);

  const commands = {
    help: {
      description: 'Show available commands',
      action: () => [
        '<span class="terminal-header-text">🤖 Welcome to Claude Builder Club @JHU</span>',
        '',
        '<span class="terminal-subheader">Available Commands:</span>',
        '<span class="terminal-separator">─────────────────────────────────────────────</span>',
        '  <span class="accent-text">about</span>          Learn about our community',
        '  <span class="accent-text">join</span>           How to become a member',
        '  <span class="accent-text">events</span>         Upcoming workshops & events',
        '  <span class="accent-text">projects</span>       What we\'re currently building',
        '  <span class="accent-text">contact</span>        Get in touch with our team',
        '  <span class="accent-text">whoami</span>         Current session info',
        '  <span class="accent-text">clear</span>          Clear the screen',
        '',
        '<span class="success-text">💡 Tip: Just type any command name to explore!</span>',
      ]
    },
    about: {
      description: 'Learn about the club',
      action: () => [
        '<span class="terminal-header-text">🤖 About Claude Builder Club @JHU</span>',
        '<span class="terminal-separator">═══════════════════════════════════════════</span>',
        '',
        'We\'re a <span class="accent-text">student-led community</span> of builders, creators, and AI enthusiasts working together to shape the future with artificial intelligence.',
        '',
        '<div class="terminal-card"><span class="terminal-subheader">🎯 What We\'re About:</span><br><br>   ▶ <span class="success-text">Hands-on workshops</span> teaching real AI skills<br>   ▶ Building projects that <span class="accent-text">actually help JHU students</span><br>   ▶ Learning from each other through <span class="highlight-text">collaboration</span><br>   ▶ Getting access to <span class="terminal-badge">Claude Pro</span> and cutting-edge AI tools</div>',
        '',
        '<span class="terminal-subheader">🌟 Our Mission:</span>',
        '<span class="muted-text">To build powerful, responsible AI solutions while fostering a community where everyone can learn and grow together.</span>',
        '',
        '<span class="success-text">✨ Ready to join the revolution? Try the "join" command!</span>',
      ]
    },
    join: {
      description: 'How to join the community',
      action: () => [
        '<span class="terminal-header-text">🚀 Join the Claude Builder Club Family!</span>',
        '<span class="terminal-separator">═══════════════════════════════════════════</span>',
        '',
        'Ready to dive into the world of <span class="accent-text">AI building</span>? Here\'s how to get started:',
        '',
        '<div class="terminal-step"><span class="terminal-subheader">📝 Step 1: Complete Your Application</span><br>Fill out our quick membership form to tell us about yourself:<br>→ <span class="terminal-link">https://forms.gle/ETBUyYZSvSFxQ13d8</span></div>',
        '<div class="terminal-step"><span class="terminal-subheader">💬 Step 2: Join Our Community Hub</span><br>Connect with fellow builders on Discord:<br>→ <span class="terminal-link">https://discord.gg/jhu-claude</span></div>',
        '<div class="terminal-step"><span class="terminal-subheader">🏗️ Step 3: Attend Build Sessions</span><br>Jump into our weekly hands-on sessions:<br>• <span class="success-text">Tuesdays 7-9 PM</span> @ Malone Hall<br>• <span class="success-text">Thursdays 6-8 PM</span> @ Hackerman Hall</div>',
        '<div class="terminal-step"><span class="terminal-subheader">📱 Step 4: Stay Connected</span><br>Follow us for updates and inspiration:<br>• Instagram: <span class="accent-text">@jhuclaude</span><br>• LinkedIn: <span class="accent-text">JHU Claude Builder Club</span></div>',
        '',
        '<div class="terminal-card"><span class="terminal-subheader">🎁 What You\'ll Get as a Member:</span><br><br>   ✓ <span class="terminal-badge">Free Claude Pro </span> access for your projects<br>   ✓ <span class="terminal-badge">$50</span> in Claude API credits<br>   ✓ <span class="highlight-text">Exclusive workshops</span> with industry experts<br>   ✓ Collaboration on <span class="success-text">real-world projects</span><br>   ✓ Direct networking with <span class="accent-text">AI professionals</span><br>   ✓ A supportive community of like-minded builders</div>',
        '',
        '<span class="muted-text">Questions? Just type "contact" to reach out to our team!</span>',
      ]
    },
    events: {
      description: 'Upcoming events and workshops',
      action: () => [
        '📅 Events & Workshops at Claude Builder Club',
        '═════════════════════════════════════════════',
        '',
        'Stay ahead of the AI curve with our exciting lineup of events!',
        '',
        '🔥 This Week\'s Highlights:',
        '   • Oct 15: "Building with Claude API" Workshop',
        '     Learn to integrate Claude into your projects',
        '   • Oct 17: Project Showcase Night',
        '     See what our members have been building',
        '   • Oct 19: Guest Speaker - Anthropic Engineer',
        '     Inside look at the future of AI development',
        '',
        '🗓️ Regular Weekly Sessions:',
        '   • Build Nights: Tuesdays & Thursdays, 7-9 PM',
        '     Hands-on coding and project development',
        '   • Coffee & Code: Fridays, 3-5 PM',
        '     Casual discussion and networking',
        '   • Weekend Hackathons: First Saturday of each month',
        '     24-hour intensive building sessions',
        '',
        '🎯 Upcoming Workshop Series:',
        '   ▶ Prompt Engineering Masterclass',
        '   ▶ AI Ethics & Responsible Development',
        '   ▶ Building AI-Powered Web Applications',
        '   ▶ Research Paper Implementation Challenge',
        '',
        '💰 Best Part: All events are completely FREE for members!',
        '',
        '📝 How to Join Events:',
        '   → RSVP in our Discord server',
        '   → Email us at events@jhu-claude.org',
        '   → Check our social media for last-minute updates',
      ]
    },
    projects: {
      description: 'Current and past projects',
      action: () => [
        '🚀 Projects We\'re Building at Claude Builder Club',
        '═══════════════════════════════════════════════',
        '',
        'From idea to impact - here\'s what our community is creating:',
        '',
        '⚡ Currently in Development:',
        '   🎓 JHU Course Assistant',
        '      AI-powered tutor helping students with coursework',
        '   🗺️  Campus Navigator',
        '      AR wayfinding app for new students and visitors',
        '   📚 Research Paper Summarizer',
        '      Making academic research more accessible at Hopkins',
        '   👥 Study Group Matcher',
        '      Connecting students with similar learning goals',
        '',
        '🏆 Recently Launched & Live:',
        '   🍽️  Dining Hall Wait Time Predictor (2,000+ active users)',
        '      Real-time crowd predictions for campus dining',
        '   🎉 Event Discovery Bot for Discord',
        '      Never miss another campus event',
        '   📊 Grade Calculator Chrome Extension',
        '      Streamlined GPA tracking for students',
        '   📅 Academic Calendar Integration Tool',
        '      Sync Hopkins calendar with personal planning apps',
        '',
        '🔍 Seeking Contributors:',
        '   💝 Mental Health Check-in Bot',
        '      Supporting student wellness through AI',
        '   🌱 Sustainable Campus Initiative Tracker',
        '      Gamifying eco-friendly campus behavior',
        '   🎓 Alumni Network Platform',
        '      Bridging current students with Hopkins graduates',
        '',
        '💡 Got an idea for a project? We\'d love to hear it!',
        '   Type "join" to become part of our builder community.',
      ]
    },
    contact: {
      description: 'Get in touch',
      action: () => [
        '📬 Get in Touch with Claude Builder Club',
        '═══════════════════════════════════════════',
        '',
        'Have questions, ideas, or just want to chat about AI? We\'d love to hear from you!',
        '',
        '💌 Contact Methods:',
        '   📧 Email: hello@jhu-claude.org',
        '      Perfect for general inquiries or project ideas',
        '   💬 Discord: https://discord.gg/jhu-claude',
        '      Join our active community for real-time chat',
        '   📱 Instagram: @jhuclaude',
        '      Follow for behind-the-scenes content and updates',
        '   💼 LinkedIn: JHU Claude Builder Club',
        '      Connect professionally and see our latest achievements',
        '',
        '🏢 Visit Us in Person:',
        '   📍 Office Hours: Malone Hall, Room 234',
        '   🕐 When: Monday-Friday, 12:00-2:00 PM',
        '   ☕ Bring your laptop and grab some coffee with us!',
        '',
        '👥 Meet Our Leadership Team:',
        '   🌟 Nathan Baek - Claude Builder Ambassador',
        '      📧 sbaek19@jhu.edu',
        '   🌟 Sahana Sanjeev - Claude Builder Ambassador',
        '      📧 ssanjee3@jhu.edu',
        '   🌟 Amelia Frank - Claude Campus Ambassador',
        '      📧 afrank33@jhu.edu',
        '',
        '💭 Whether you\'re a complete beginner or an AI expert,',
        '   we\'re here to help you build something amazing!',
      ]
    },
    clear: {
      description: 'Clear the terminal',
      action: () => 'CLEAR'
    },
    whoami: {
      description: 'Display current user',
      action: () => [
        '👤 Current Session Information',
        '═══════════════════════════════════════════',
        '',
        `🔐 User: ${currentUser}`,
        '🖥️  Terminal: Claude Builder Club @JHU Interactive Portal',
        '📅 Session: ' + new Date().toLocaleDateString(),
        '🕒 Time: ' + new Date().toLocaleTimeString(),
        '',
        '🎯 Access Level: Guest Explorer',
        '   You\'re currently browsing as a visitor.',
        '   Ready to become a full member? Type "join" to get started!',
        '',
        '🌟 Available Commands: Type "help" to see what you can explore',
        '💡 Pro Tip: Each command reveals more about our amazing community!',
      ]
    }
  };

  const typeMessage = async (lines, delay = 15) => {
    setIsTyping(true);
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Add new line to history for this line
      setHistory(prev => [...prev, { type: 'output', content: '' }]);
      
      await new Promise(resolve => {
        let index = 0;
        const typing = setInterval(() => {
          if (index <= line.length) {
            setHistory(prev => {
              const newHistory = [...prev];
              newHistory[newHistory.length - 1] = {
                type: 'output',
                content: line.substring(0, index)
              };
              return newHistory;
            });
            index++;
          } else {
            clearInterval(typing);
            resolve();
          }
        }, delay);
      });
      
      // Add small delay between lines
      if (i < lines.length - 1) {
        await new Promise(resolve => setTimeout(resolve, 30));
      }
    }
    
    setIsTyping(false);
  };

  useEffect(() => {
    // Welcome message
    typeMessage([
      '<span class="terminal-header-text">🤖 Welcome to Claude Builder Club @JHU</span>',
      '<span class="terminal-separator">═══════════════════════════════════════════</span>',
      '<span class="muted-text">Johns Hopkins University AI Community</span>',
      '<span class="success-text">🚀 Ready to explore the future of AI building?</span>',
      '<div class="terminal-card"><span class="terminal-subheader">💡 Quick Start:</span><br><br>   → Type <span class="accent-text">"help"</span> to see all available commands<br>   → Type <span class="accent-text">"about"</span> to learn about our community<br>   → Type <span class="accent-text">"join"</span> if you\'re ready to become a builder</div>',
      '<span class="highlight-text">Let\'s build something amazing together! ✨</span>',
    ], 15);

    // Focus input
    inputRef.current?.focus();
  }, []);

  const executeCommand = async (cmd) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    
    // Add command to history
    setHistory(prev => [...prev, { 
      type: 'command', 
      content: `${currentUser}:~$ ${cmd}`,
      timestamp: new Date()
    }]);

    // Execute command
    if (commands[trimmedCmd]) {
      const result = commands[trimmedCmd].action();
      
      if (result === 'CLEAR') {
        setHistory([]);
        return;
      }
      
      // Add empty line for output
      setHistory(prev => [...prev, { type: 'output', content: '' }]);
      
      // Type out response
      await typeMessage(Array.isArray(result) ? result : [result]);
    } else if (trimmedCmd === '') {
      // Empty command
      return;
    } else {
      // Unknown command
      setHistory(prev => [...prev, { 
        type: 'error', 
        content: `bash: ${trimmedCmd}: command not found\nType "help" for available commands.`
      }]);
    }

    // Add spacing
    setHistory(prev => [...prev, { type: 'output', content: '' }]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (input.trim() && !isTyping) {
      await executeCommand(input);
      setInput('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      // Simple tab completion
      const cmdStart = input.toLowerCase();
      const matches = Object.keys(commands).filter(cmd => cmd.startsWith(cmdStart));
      if (matches.length === 1) {
        setInput(matches[0]);
      }
    }
  };

  useEffect(() => {
    // Auto-scroll to bottom
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  return (
    <div className="terminal-container">
      <div className="scanlines"></div>
      <div className="terminal-window">
        <div className="terminal-header">
          <div className="terminal-controls">
            <div className="control-btn close"></div>
            <div className="control-btn minimize"></div>
            <div className="control-btn maximize"></div>
          </div>
          <div className="terminal-title">
            <img src="/claude-logo.svg" alt="Claude" className="terminal-logo" />
            claude@jhu-builder-club ~ Terminal
          </div>
        </div>
        
        <div className="terminal-body" ref={terminalRef}>
          {history.map((entry, index) => (
            <div key={index} className={`terminal-line ${entry.type}`}>
              <span dangerouslySetInnerHTML={{ __html: entry.content }} />
            </div>
          ))}
          
          {!isTyping && (
            <form onSubmit={handleSubmit} className="terminal-input-line">
              <span className="terminal-prompt">{currentUser}:~$ </span>
              <div className="input-container">
                <span className="input-display">{input}</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="terminal-input-hidden"
                  autoComplete="off"
                  autoFocus
                />
                <span className="cursor">█</span>
              </div>
            </form>
          )}
          
          {isTyping && (
            <div className="terminal-line">
              <span className="cursor typing-cursor">█</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Terminal;