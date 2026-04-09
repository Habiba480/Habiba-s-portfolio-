(function () {
  var data = window.PORTFOLIO;
  if (!data || !data.profile) return;

  var p = data.profile;
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  function setText(id, text) {
    var el = document.getElementById(id);
    if (el && text) el.textContent = text;
  }

  setText("profile-name", p.name);
  setText("profile-title", p.title);
  setText("profile-summary", p.summary);
  setText("footer-name", p.name);
  setText("footer-title", p.title);

  var loc = document.getElementById("profile-location");
  if (loc && p.location && String(p.location).trim()) {
    loc.hidden = false;
    loc.textContent = p.location;
  }

  function mailtoHref(email) {
    var e = email || p.email || "";
    if (!e) return "#";
    return "mailto:" + e + "?subject=" + encodeURIComponent("Hello Habiba");
  }

  function renderLinks(containerId, links) {
    var ul = document.getElementById(containerId);
    if (!ul || !links) return;

    links.forEach(function (l) {
      if (!l) return;
      var li = document.createElement("li");
      var a = document.createElement("a");
      var href = "";
      var kind = l.kind || "";

      if (kind === "email") {
        href = mailtoHref(p.email);
        a.textContent = l.label || p.email || "Email";
        a.setAttribute("href", href);
        a.setAttribute(
          "aria-label",
          "Send email to " + (p.email || "Habiba Ahmed Hassan")
        );
      } else if (kind === "phone" && l.href) {
        href = l.href;
        a.textContent = l.label || l.href;
        a.setAttribute("href", href);
        a.setAttribute("aria-label", "Call " + (l.label || ""));
      } else if (l.href) {
        href = l.href;
        a.textContent = l.label || l.href;
        a.setAttribute("href", href);
        a.target = "_blank";
        a.rel = "noopener noreferrer";
      } else {
        return;
      }

      if (href.indexOf("mailto:") === 0 || href.indexOf("tel:") === 0) {
        a.removeAttribute("target");
        a.removeAttribute("rel");
      }

      li.appendChild(a);
      ul.appendChild(li);
    });
  }

  renderLinks("profile-links", p.links || []);
  renderLinks("footer-links", p.links || []);

  /* Experience */
  var expList = document.getElementById("experience-list");
  var experiences = data.experience || [];
  if (expList && experiences.length) {
    experiences.forEach(function (e) {
      var li = document.createElement("li");
      li.className = "exp-card reveal-on-scroll";

      var top = document.createElement("div");
      top.className = "exp-top";

      var org = document.createElement("h3");
      org.className = "exp-org";
      org.textContent = e.org || "";
      top.appendChild(org);

      if (e.period) {
        var period = document.createElement("span");
        period.className = "exp-period";
        period.textContent = e.period;
        top.appendChild(period);
      }
      li.appendChild(top);

      if (e.role) {
        var role = document.createElement("p");
        role.className = "exp-role";
        role.textContent = e.role;
        li.appendChild(role);
      }

      if (e.summary) {
        var sum = document.createElement("p");
        sum.className = "exp-summary";
        sum.textContent = e.summary;
        li.appendChild(sum);
      }

      var initiatives = e.initiatives;
      if (initiatives && initiatives.length) {
        initiatives.forEach(function (init) {
          var block = document.createElement("div");
          block.className = "exp-initiative";

          var it = document.createElement("h4");
          it.className = "exp-init-title";
          it.textContent = init.title || "";
          block.appendChild(it);

          var bs = init.bullets;
          if (bs && bs.length) {
            var ulb = document.createElement("ul");
            ulb.className = "exp-init-bullets";
            bs.forEach(function (b) {
              var bli = document.createElement("li");
              bli.textContent = b;
              ulb.appendChild(bli);
            });
            block.appendChild(ulb);
          }

          if (init.stack) {
            var tech = document.createElement("p");
            tech.className = "exp-init-stack";
            tech.textContent = init.stack;
            block.appendChild(tech);
          }

          var decs = init.decisions;
          if (decs && decs.length) {
            var decWrap = document.createElement("div");
            decWrap.className = "exp-init-decisions";
            var decTitle = document.createElement("p");
            decTitle.className = "exp-decisions-title";
            decTitle.textContent = "What I used and why";
            decWrap.appendChild(decTitle);
            var decUl = document.createElement("ul");
            decUl.className = "exp-decisions-list";
            decs.forEach(function (line) {
              var dli = document.createElement("li");
              dli.textContent = line;
              decUl.appendChild(dli);
            });
            decWrap.appendChild(decUl);
            block.appendChild(decWrap);
          }

          li.appendChild(block);
        });
      } else {
        var hl = e.highlights;
        if (hl && hl.length) {
          var ol = document.createElement("ul");
          ol.className = "exp-highlights";
          hl.forEach(function (item) {
            var itemLi = document.createElement("li");
            itemLi.textContent = item;
            ol.appendChild(itemLi);
          });
          li.appendChild(ol);
        }
      }

      expList.appendChild(li);
    });
  }

  /* Expertise */
  var grid = document.getElementById("expertise-grid");
  var expertise = data.expertise || [];
  if (grid && expertise.length) {
    var compact = document.createElement("div");
    compact.className = "expertise-compact reveal-on-scroll";
    expertise.forEach(function (block) {
      var row = document.createElement("div");
      row.className = "exp-row";
      var strong = document.createElement("strong");
      strong.className = "exp-row-label";
      strong.textContent = block.label || "";
      var span = document.createElement("span");
      span.className = "exp-row-items";
      span.textContent = (block.items || []).join(" · ");
      row.appendChild(strong);
      row.appendChild(span);
      compact.appendChild(row);
    });
    grid.appendChild(compact);
  }

  /* Education */
  var eduList = document.getElementById("education-list");
  var education = data.education || [];
  if (eduList && education.length) {
    education.forEach(function (ed) {
      var article = document.createElement("article");
      article.className = "edu-card reveal-on-scroll";

      var row = document.createElement("div");
      row.className = "edu-top";
      var deg = document.createElement("h3");
      deg.className = "edu-degree";
      deg.textContent = ed.degree || "";
      row.appendChild(deg);
      if (ed.period) {
        var per = document.createElement("span");
        per.className = "edu-period";
        per.textContent = ed.period;
        row.appendChild(per);
      }
      article.appendChild(row);

      if (ed.school) {
        var sch = document.createElement("p");
        sch.className = "edu-school";
        sch.textContent = ed.school;
        article.appendChild(sch);
      }
      if (ed.detail) {
        var det = document.createElement("p");
        det.className = "edu-detail";
        det.textContent = ed.detail;
        article.appendChild(det);
      }

      eduList.appendChild(article);
    });
  }

  /* Certifications */
  var certWrap = document.getElementById("certifications-list");
  var certs = data.certifications || [];
  if (certWrap && certs.length) {
    var ulc = document.createElement("ul");
    ulc.className = "cert-list";
    certs.forEach(function (c) {
      var cli = document.createElement("li");
      cli.textContent = c;
      ulc.appendChild(cli);
    });
    certWrap.appendChild(ulc);
  }

  function initMotion() {
    var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var nodes = document.querySelectorAll(".reveal-on-scroll");
    if (reduce) {
      nodes.forEach(function (el) {
        el.classList.add("is-visible");
      });
      return;
    }
    if (!("IntersectionObserver" in window)) {
      nodes.forEach(function (el) {
        el.classList.add("is-visible");
      });
      return;
    }
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.06, rootMargin: "0px 0px -28px 0px" }
    );
    nodes.forEach(function (el) {
      io.observe(el);
    });
  }

  initMotion();
})();
