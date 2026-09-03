import React, { useState } from 'react';
import { Users, TrendingUp, Download, Mail, Search, CheckCircle, RefreshCw, UserPlus, Sparkles } from 'lucide-react';

export default function DashboardView({ subscribers, onAddMockSubscriber, totalCount }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [invitedMessage, setInvitedMessage] = useState('');

  // Filter subscribers by email
  const filteredSubscribers = subscribers.filter(sub =>
    sub.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    sub.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleExportCSV = () => {
    const headers = "Queue Position,Email,Referrals,Status,Joined Date\n";
    const rows = subscribers.map(s => `${s.rank},${s.email},${s.referrals},${s.status},${s.date}`).join("\n");
    const blob = new Blob([headers + rows], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `nasro-waitlist-export-${new Date().toISOString().slice(0,10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSendBatchInvite = () => {
    setInvitedMessage('🚀 Success! Sent early beta invitations to the top 25 subscribers in queue.');
    setTimeout(() => setInvitedMessage(''), 4500);
  };

  return (
    <div className="dashboard-view" id="dashboard">
      <div className="dashboard-container">
        {/* Header */}
        <div className="dashboard-header">
          <div>
            <h1 className="dashboard-title">Waitlist Analytics & Backstage</h1>
            <p className="dashboard-sub">
              Live campaign performance, viral referral tracking, and invite batching.
            </p>
          </div>
          <div className="dashboard-actions">
            <button className="btn-secondary" onClick={handleExportCSV} id="export-csv-btn">
              <Download size={16} />
              <span>Export CSV</span>
            </button>
            <button className="btn-primary" onClick={handleSendBatchInvite} id="send-batch-btn">
              <Mail size={16} />
              <span>Invite Top Batch</span>
            </button>
          </div>
        </div>

        {invitedMessage && (
          <div style={{
            background: '#ecfdf5',
            border: '1px solid #a7f3d0',
            color: '#065f46',
            padding: '12px 20px',
            borderRadius: '12px',
            marginBottom: '24px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            fontWeight: 600,
            fontSize: '0.9rem'
          }}>
            <CheckCircle size={18} color="#059669" />
            <span>{invitedMessage}</span>
          </div>
        )}

        {/* Stats Grid */}
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-card-title">Total Waitlist Signups</div>
            <div className="stat-card-num">{totalCount.toLocaleString()}</div>
            <div className="stat-card-delta">↑ 18.4% this week</div>
          </div>
          <div className="stat-card">
            <div className="stat-card-title">Viral K-Factor</div>
            <div className="stat-card-num">2.41x</div>
            <div className="stat-card-delta" style={{ color: '#0284c7' }}>Exponential Loop</div>
          </div>
          <div className="stat-card">
            <div className="stat-card-title">Share Rate</div>
            <div className="stat-card-num">44.8%</div>
            <div className="stat-card-delta">Industry avg: 12%</div>
          </div>
          <div className="stat-card">
            <div className="stat-card-title">Invited to Beta</div>
            <div className="stat-card-num">1,250</div>
            <div className="stat-card-delta" style={{ color: '#7c3aed' }}>Batch 1 & 2 Active</div>
          </div>
        </div>

        {/* Table Card */}
        <div className="dashboard-table-card">
          <div className="table-toolbar">
            <div className="table-search">
              <Search size={16} color="#94a3b8" />
              <input
                type="text"
                placeholder="Search by email or status..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button
                className="btn-secondary"
                style={{ padding: '8px 14px', fontSize: '0.8rem' }}
                onClick={onAddMockSubscriber}
                title="Simulate a new incoming user"
              >
                <UserPlus size={14} />
                <span>Simulate Viral Signup</span>
              </button>
            </div>
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table className="subscriber-table">
              <thead>
                <tr>
                  <th>Rank</th>
                  <th>Subscriber Email</th>
                  <th>Referrals</th>
                  <th>Status</th>
                  <th>Milestone Unlocked</th>
                  <th>Joined Date</th>
                </tr>
              </thead>
              <tbody>
                {filteredSubscribers.map((sub, i) => (
                  <tr key={i}>
                    <td style={{ fontWeight: 700, color: '#0284c7' }}>#{sub.rank}</td>
                    <td style={{ fontWeight: 600 }}>{sub.email}</td>
                    <td>
                      <span style={{
                        background: '#f1f5f9',
                        padding: '4px 10px',
                        borderRadius: '6px',
                        fontWeight: 600,
                        fontSize: '0.82rem'
                      }}>
                        {sub.referrals} friends
                      </span>
                    </td>
                    <td>
                      <span className={`badge-status ${sub.status === 'Invited' ? 'invited' : 'active'}`}>
                        {sub.status}
                      </span>
                    </td>
                    <td>
                      <span style={{ fontSize: '0.82rem', color: '#475569' }}>
                        {sub.referrals >= 10 ? 'Founder Circle' : sub.referrals >= 5 ? '1-Yr Pro' : sub.referrals >= 3 ? 'VIP Beta' : 'General Queue'}
                      </span>
                    </td>
                    <td style={{ color: '#94a3b8', fontSize: '0.82rem' }}>{sub.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
