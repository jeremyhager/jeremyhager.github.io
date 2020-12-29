module.exports = {
  docs:[
    {
      type: 'category',
      label: 'Internal.VirtNet',
      items: ['internal-virtnet-overview','centos8-hypervisor','documentation-server','foreman','dns-dhcp','ldap1-ldap2','pfsense-router'],
    },
    {
      type: 'category',
      label: 'How-To\'s',
      items: [
        'creating-new-network',
        'pfsense-as-vm',
        'base-vm-server-setup',
        'setting-up-bind',
        'maintaining-dns',
        'setting-up-dhcp',
        {
          type: 'category',
          label: 'Foreman',
          items: [
            'installing-foreman-with-katello',
            'configuring-foreman-terminal',
            'foreman-content-keys-backup',
            'tftp-with-foreman',
            'creating-foreman-hosts',
          ],
        },
        {
          type: 'category',
          label: 'LDAP',
          items: [
            'setting-up-ldap-servers',
            'configuring-ldap',
            'creating-ldap-users',
            'enrolling-foreman-ldap',
            'manual-enrollment-ldap',
          ],
        },
        {
          type: 'category',
          label: 'Postgresql',
          items: [
            'postgres-prereqs',
            'postgres-setup',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Guides',
      items: ['nixadmin-guide','linux-admin-roadmap','devops-guide'],
    },
  ],
};
