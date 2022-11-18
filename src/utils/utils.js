const truncateString = (string, limit = 30) => {
  if (!string) return null;

  return string.length > limit ? `${string.slice(0, limit - 1)}...` : string;
};

const whatsappLink = (phone, text = null) =>
  'whatsapp://send?phone=:phone&text=:text'
    .replace(':phone', phone.replace(/\D/g, ''))
    .replace(':text', encodeURIComponent(text || ''));

const scrollTop = (id = 'app') =>
  document.getElementById(id).scrollTo({ top: 0, behavior: 'smooth' });

const openWhatsapp = (phone, text = null) => window.open(whatsappLink(phone, text), '_blank');

function CountDownTimer(duration) {
  this.duration = duration;
  this.tickFtns = null;
  this.running = false;
};

CountDownTimer.prototype.start = function () {
  if (this.running) {
    return;
  }
  this.running = true;
  const that = this;
  let diff;
  let obj;

  (function timer() {
    diff = that.duration - Date.now();

    if (diff > 0) {
      setTimeout(timer, that.granularity);
    } else {
      diff = 0;
      that.running = false;
    }

    obj = CountDownTimer.parse(diff);
    if (that.tickFtns) {
      that.tickFtns(obj);
    }
  })();
};

CountDownTimer.prototype.onTick = function (ftn) {
  if (typeof ftn === 'function') {
    this.tickFtns = ftn;
  }
  return this;
};

CountDownTimer.prototype.expired = function () {
  return !this.running;
}

CountDownTimer.parse = (diff) => ({
  days: Math.floor(diff / (1000 * 60 * 60 * 24)),
  hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
  minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
  seconds: Math.floor((diff % (1000 * 60)) / 1000),
});

export { truncateString, scrollTop, whatsappLink, openWhatsapp, CountDownTimer };
